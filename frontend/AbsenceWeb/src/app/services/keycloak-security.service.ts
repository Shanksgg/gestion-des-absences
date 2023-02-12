import { Injectable, OnInit } from '@angular/core';
import  {KeycloakInstance, KeycloakProfile} from "keycloak-js";
import  {KeycloakService, KeycloakEventType} from "keycloak-angular";

declare var  Keycloak :any;
@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService{
  public profile? : KeycloakProfile;
  public kcInstance! :KeycloakInstance;

  async init() {
    this.kcInstance = new Keycloak({
      url:"http://localhost:8888",
      realm: "jee-realm",
      clientId: "jee-client",
      clientSecret: "J4RYnRGulk5yTaTKHLcx7x5wJdEBhbHO",
    }),
    await this.kcInstance.init({
      onLoad: 'check-sso',
      checkLoginIframe: false
    });
  }
}