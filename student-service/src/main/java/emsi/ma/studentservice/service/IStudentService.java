package emsi.ma.studentservice.service;

import emsi.ma.studentservice.entity.Student;
import java.util.List;

public interface IStudentService {
    List<Student> getStudents();
    Student getStudent(Long id);
}