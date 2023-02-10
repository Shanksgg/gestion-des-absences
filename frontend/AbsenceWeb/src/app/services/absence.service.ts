import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {KeycloakSecurityService} from "./keycloak-security.service";

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  constructor(private http:HttpClient,private key:KeycloakSecurityService) { }

  public getAbsences(): Observable<any>{

    return this.http.get("http://localhost:8080/ABSENCE-SERVICE/Absences",
      {headers:new HttpHeaders({
      Authorization:'Bearer '+this.key.kc.token,
    })});


  };

}
