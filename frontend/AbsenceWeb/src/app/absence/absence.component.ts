import {Component, OnInit} from '@angular/core';
import {AbsenceService} from "../services/absence.service";
import {Absence} from "../models/Absence.model";

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.css']
})
export class AbsenceComponent implements OnInit {
  constructor(private absenceService : AbsenceService) {}
  errorMessage!: object;

  absences !: Array<Absence>;

  ngOnInit(): void {
    this.absenceService.getAbsences().subscribe({
      next:(data)=>{
        console.log(data)
        this.absences=data
      },error:(err)=>{
        this.errorMessage=err.message;
        console.log(err)
      }
    })
  }

  handleUpdateAbsence(absence: Absence) {
    
  }

  handleDeleteAbsence(absence: Absence) {
    
  }
}