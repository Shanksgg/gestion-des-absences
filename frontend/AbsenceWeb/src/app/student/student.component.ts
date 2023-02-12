import { Component, OnInit } from '@angular/core';
import { Student } from '../models/Student.model';
import {StudentService} from "../services/student.service";
import {KeycloakSecurityService} from "../services/keycloak-security.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  errorMsg!: object;
  students !: Array<Student> ;

  constructor( private studentService:StudentService, private kc: KeycloakSecurityService){}

  ngOnInit(): void {
    if(this.kc.kcInstance.authenticated) {
      this.studentService.getStudents().subscribe({
        next:(data)=>{
          this.students=data._embedded.students
        },error:(err)=>{
          this.errorMsg=err.message;
          console.log(err)
        }
      })
    }
  }

  handleUpdateStudent(student: Student) {
    
  }

  handleDeleteStudent(student: Student) {
    
  }
}