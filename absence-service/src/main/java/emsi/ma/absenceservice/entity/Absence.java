package emsi.ma.absenceservice.entity;

import emsi.ma.absenceservice.model.Course;
import emsi.ma.absenceservice.model.Student;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor @AllArgsConstructor
public class Absence {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Transient
    private Student student;

    private Long studentID;

    @Transient
    private Course course;

    private Long courseID;

    private int nbrAbsence;
}
