package emsi.ma.absenceservice.web;

import emsi.ma.absenceservice.entity.Absence;
import emsi.ma.absenceservice.model.Course;
import emsi.ma.absenceservice.model.Student;
import emsi.ma.absenceservice.repository.AbsenceRepository;
import emsi.ma.absenceservice.service.CourseRestClient;
import emsi.ma.absenceservice.service.StudentRestClient;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AbsenceRestController {
   final AbsenceRepository absenceRepository;
   final CourseRestClient courseRestClient;
   final StudentRestClient studentRestClient;

    public AbsenceRestController(AbsenceRepository absenceRepo, CourseRestClient courseRestClient, StudentRestClient studentRestClient) {
        this.absenceRepository = absenceRepo;
        this.courseRestClient = courseRestClient;
        this.studentRestClient = studentRestClient;
    }

    @PreAuthorize("hasAnyAuthority('USER')")
    @GetMapping("/absences")
    public List<Absence> getAll(){
        List<Absence> absences=absenceRepository.findAll();
//        absences.forEach(absence -> {
//            absence.setCourse(courseRestClient.getCourseById(absence.getCourseID()));
//            absence.setStudent(studentRestClient.getStudentById(absence.getStudentID()));
//
//        });
//        return  absences;
        return getAbsences(absences);
    }

    @PreAuthorize("hasAnyAuthority('USER')")
    @GetMapping("/absences/students/{id}")
    public List<Absence> getAbsenceByStudentsID(@PathVariable  Long id){
        List<Absence> absences = absenceRepository.findAbsencesByStudentID(id);
        return getAbsences(absences);
    }

    @PreAuthorize("hasAnyAuthority('USER')")
    @Transactional
    @DeleteMapping("/absences/{ids}/{idc}")
    public void deleteAbsence(@PathVariable Long ids,@PathVariable Long idc){
        absenceRepository.deleteAbsenceByStudentIDAndCourseID(ids, idc);
    }

    @PreAuthorize("hasAnyAuthority('USER')")
    @PostMapping("/absences")
    public Absence addAbsence(@RequestBody Absence absence ){
        Student student = studentRestClient.getStudentById(absence.getStudentID());
        Course course = courseRestClient.getCourseById(absence.getCourseID());

        if(course ==null || student ==null){
            return absence;
        }else{
           Absence absence1 = absenceRepository.findAbsencesByStudentIDAndCourseID(student.getId(), course.getId());
           if(absence1 != null){
               absence1.setNbrAbsence(absence1.getNbrAbsence()+ absence.getNbrAbsence());
               return absenceRepository.save(absence1);

           }
            return absenceRepository.save(absence);
        }
    }

    public List<Absence> getAbsences( List<Absence> absences){
        absences.forEach(absence -> {
            absence.setCourse(courseRestClient.getCourseById(absence.getCourseID()));
            absence.setStudent(studentRestClient.getStudentById(absence.getStudentID()));

        });
        return absences;
    }
}