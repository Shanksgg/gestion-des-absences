import {Component, OnInit} from '@angular/core';
import {AbsenceService} from "../services/absence.service";
import {Absence} from "../models/Absence.model";
import {Student} from "../models/Student.model";
import {KeycloakSecurityService} from "../services/keycloak-security.service";

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.css']
})
export class AbsenceComponent implements OnInit {
  constructor(private absenceService : AbsenceService, private kc: KeycloakSecurityService) {}
  errorMsg!: object;

  students !: Array<Absence>;
  ngOnInit(): void {
    if(this.kc.kcInstance.authenticated) {
      this.absenceService.getAbsences().subscribe({
        next:(data)=>{
          this.students=data.length === 0 ? null : data;
          console.log(data)
        },error:(err)=>{
          this.errorMsg=err.message;
          console.log(err)
        }
      })
    }
  }

  handleUpdateAbsence(student: Absence) {

  }

  handleDeleteAbsence(student: Absence) {

  }
}