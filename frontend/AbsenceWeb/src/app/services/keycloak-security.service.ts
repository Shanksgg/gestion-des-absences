import { Injectable, OnInit } from '@angular/core';
import  {KeycloakInstance, KeycloakProfile} from "keycloak-js";
import  {KeycloakService, KeycloakEventType} from "keycloak-angular";

declare var  Keycloak :any;
@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {
  public profile? : KeycloakProfile;
  public kc! :KeycloakInstance;

  constructor(private readonly kcService: KeycloakService) {
    this.ngOnInit();
    this.kcService
        .isLoggedIn()
        .then( loggedIn => {
          if( loggedIn ) {
            console.log(this.kcService.getUsername());
          }
        })
        .catch( reason => console.log ( reason ));
  }

  public async ngOnInit() {
    let isLogged = await this.kcService.isLoggedIn();
    console.log(this.kc.loadUserInfo())
    if(isLogged) {
      console.log("this.profile.firstName")
      this.profile = await this.kcService.loadUserProfile();
      console.log(this.profile.firstName)
    }
  }
  async init2(){
    this.kcService.keycloakEvents$.subscribe({
      next: (e) => {
        if (e.type == KeycloakEventType.OnAuthSuccess) {
          this.kcService.loadUserProfile().then(profile=>{
            this.profile=profile;
          });
        }
      }
    });
  }

  async init() {
    this.kc = new Keycloak({
      url:"http://localhost:8888",
      realm: "jee-realm",
      clientId: "jee-client"
    })
    await this.kc.init({
      onLoad: 'login-required',
      checkLoginIframe: false
    });
    // console.log(this.kc.token)
  }

}
