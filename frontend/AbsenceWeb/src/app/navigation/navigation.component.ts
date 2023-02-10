import {Component, OnInit} from '@angular/core';
import {KeycloakSecurityService} from "../services/keycloak-security.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  name:any;
  constructor(public key:KeycloakSecurityService) {
  }

  ngOnInit(): void {
    this.name=this.key.kc.tokenParsed;
    console.log("this",this.name);

  }

  onLogout() {
    this.key.kc.logout();
  }

  onLogin() {
    this.key.kc.login();
  }

  onChangePassword() {
    this.key.kc.accountManagement();
  }

  isAppManager() {

    return this.key.kc.hasRealmRole("ADMIN");
  }
}