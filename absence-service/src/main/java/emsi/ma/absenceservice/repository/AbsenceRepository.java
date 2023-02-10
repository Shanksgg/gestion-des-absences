package emsi.ma.absenceservice.repository;

import emsi.ma.absenceservice.entity.Absence;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AbsenceRepository extends JpaRepository<Absence,Long> {
    List<Absence> findAbsencesByStudentID(Long Id);
    Absence findAbsencesByStudentIDAndCourseID(Long Ids,Long Idc);
    void deleteAbsenceByStudentIDAndCourseID(Long Ids,Long Idc);
}