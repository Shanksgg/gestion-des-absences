import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {KeycloakSecurityService} from "./keycloak-security.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http:HttpClient,private key:KeycloakSecurityService) { }

  public getStudents(): Observable<any>{

    return this.http.get("http://localhost:8080/STUDENTS-SERVICE/students",
      {headers:new HttpHeaders({
          Authorization:'Bearer '+this.key.kc.token,
        })});


  };
}
