import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {KeycloakSecurityService} from "./keycloak-security.service";

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  constructor(private http:HttpClient, private key:KeycloakSecurityService) { }

  public getAbsences(): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8')
        .set('Authorization', 'Bearer ' + this.key.kcInstance.token);

    return this.http.get("http://localhost:8080/ABSENCE-SERVICE/absences", {headers: headers});
  };
}
