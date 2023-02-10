import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { AbsenceComponent } from './absence/absence.component';
import { HttpClientModule, HttpHeaders } from "@angular/common/http";
import { KeycloakAngularModule, KeycloakService } from "keycloak-angular";
import { KeycloakSecurityService } from "./services/keycloak-security.service";
import { StudentComponent } from './student/student.component';
import { ProfessorComponent } from './professor/professor.component';

export function kcFactory(kcSecurity:KeycloakSecurityService) {
  return ()=>kcSecurity.init();
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AbsenceComponent,
    StudentComponent,
    ProfessorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    KeycloakAngularModule
  ],
  providers: [
    {provide: APP_INITIALIZER , deps : [KeycloakSecurityService],useFactory: kcFactory,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }