import {Component, OnInit} from '@angular/core';
import {Student} from "../models/Student.model";
import {StudentService} from "../services/student.service";
import {Professor} from "../models/Professor.model";
import {ProfessorService} from "../services/professor.service";
import {KeycloakSecurityService} from "../services/keycloak-security.service";

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {
  errorMsg!: object;

  professors !: Array<Professor> ;

  constructor( private professorService:ProfessorService, private kc: KeycloakSecurityService){}
  ngOnInit(): void {
    if(this.kc.kcInstance.authenticated) {
      this.professorService.getProfessors().subscribe({
        next:(data)=>{
          this.professors=data._embedded.professors
        },error:(err)=>{
          this.errorMsg=err.message;
          console.log(err)
        }
      })
    }
  }

  handelDeleteProfessor(professor: Professor) {

  }

  handelUpdateProfessor(professor: Professor) {

  }
}
