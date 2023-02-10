import {Student} from "./Student.model";
import {Course} from "./Course.model";

export interface Absence {
  id: number;
  student: Student;
  studentID: number;
  course: Course;
  courseID: number
  nbrAbsence: number;
}