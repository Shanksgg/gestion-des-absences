import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsenceComponent } from "./absence/absence.component";
import { StudentComponent } from "./student/student.component";
import { HomeComponent } from "./home/home.component";
import { ProfessorComponent } from "./professor/professor.component";
import { AuthGuard } from "./guards/security.guard";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'absences', component: AbsenceComponent },
  { path: 'students', component: StudentComponent },
  { path: 'professors', component: ProfessorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }