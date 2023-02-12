import { Component } from '@angular/core';
import {KeycloakSecurityService} from "../services/keycloak-security.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  firstName?: string;
  constructor(private readonly kc: KeycloakSecurityService) {
    if(kc.kcInstance.authenticated) {
      kc.kcInstance.loadUserProfile()
          .then((p) => {
            this.firstName = p.firstName;
          }).catch(function() {
        console.log('Failed to load user profile');
      })
    }
  }
}
