import {Component, OnInit} from '@angular/core';
import {KeycloakSecurityService} from "../services/keycloak-security.service";
import { SecurityService } from '../services/security.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor(public securityService:SecurityService) {
  }

  public async ngOnInit() {

  }

  onLogout() {
    this.securityService.kcService.logout(window.location.origin);
  }

  public  getToken() {
    this.securityService.init();
    console.log(this.securityService.profile)
  }

  async login(){
    await this.securityService.kcService.login({
      redirectUri : window.location.origin
    })
    console.log(this.securityService.profile)
  }
}