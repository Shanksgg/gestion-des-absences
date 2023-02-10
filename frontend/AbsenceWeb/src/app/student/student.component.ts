import { Component } from '@angular/core';
import { Student } from '../models/Student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students !: Array<Student> ;
  handleUpdateStudent(student: Student) {
    
  }

  handleDeleteStudent(student: Student) {
    
  }
}