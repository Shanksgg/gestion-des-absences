import {Component, OnInit} from '@angular/core';
import {Student} from "../models/Student.model";
import {EtudiantService} from "../services/etudiant.service";
import {Professor} from "../models/Professor.model";
import {ProfessorService} from "../services/professor.service";

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {
  erreurMessage!: object;

  professors !: Array<Professor> ;

  constructor( private professorService:ProfessorService ){}
  ngOnInit(): void {
    this.professorService.getProfessors().subscribe({
      next:(data)=>{
        console.log(data)

        this.professors=data._embedded.professors
        console.log(this.professors)

      },error:(err)=>{
        this.erreurMessage=err.message;
        console.log(err)
      }
    })
  }


  handelDeleteProfessor(professor: Professor) {

  }

  handelUpdateProfessor(professor: Professor) {

  }
}
