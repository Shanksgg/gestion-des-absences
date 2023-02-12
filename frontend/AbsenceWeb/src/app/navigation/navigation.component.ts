import {Component, OnInit} from '@angular/core';
import {KeycloakSecurityService} from "../services/keycloak-security.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  firstName?: string;
  isLogged?: boolean;
  constructor(private readonly kc: KeycloakSecurityService) {
    this.isLogged = kc.kcInstance.authenticated;
    if(this.isLogged) {
      kc.kcInstance.loadUserProfile()
          .then((p) => {
            this.firstName = p.username ?? "N/A";
            let tmp = this.firstName; // IT'S DUMB YES

            this.firstName= tmp.charAt(0).toUpperCase() + tmp.slice(1);
          }).catch(function() {
        console.log('Failed to load user profile');
      })
    }
  }

  public async ngOnInit() {

  }

  onLogout() {
    this.kc.kcInstance.logout();
  }

  async login(){
    await this.kc.kcInstance.login({
      redirectUri : window.location.origin
    })
  }
}