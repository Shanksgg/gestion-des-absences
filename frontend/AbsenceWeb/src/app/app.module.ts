import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { AbsenceComponent } from './absence/absence.component';
import { HttpClientModule, HttpHeaders } from "@angular/common/http";
import { KeycloakAngularModule, KeycloakService } from "keycloak-angular";
import { StudentComponent } from './student/student.component';
import { ProfessorComponent } from './professor/professor.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/security.guard'
import { HomeComponent } from './home/home.component'
import {KeycloakSecurityService} from './services/keycloak-security.service'


export function kcFactory(kcSecurity:KeycloakSecurityService) {
  return ()=>kcSecurity.init();
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AbsenceComponent,
    StudentComponent,
    ProfessorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    KeycloakAngularModule,
    CommonModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: kcFactory,
      multi: true,
      deps : [KeycloakSecurityService]
    },
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }