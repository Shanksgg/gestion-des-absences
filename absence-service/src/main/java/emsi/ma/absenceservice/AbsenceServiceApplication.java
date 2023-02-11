package emsi.ma.absenceservice;

import emsi.ma.absenceservice.entity.Absence;
import emsi.ma.absenceservice.model.Course;
import emsi.ma.absenceservice.model.Student;
import emsi.ma.absenceservice.repository.AbsenceRepository;
import emsi.ma.absenceservice.service.CourseRestClient;
import emsi.ma.absenceservice.service.StudentRestClient;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class AbsenceServiceApplication implements CommandLineRunner {
	final AbsenceRepository absenceRepository;
	final CourseRestClient courseRestClient;
	final StudentRestClient studentRestClient;

	public AbsenceServiceApplication(AbsenceRepository absenceRepository, CourseRestClient courseRestClient, StudentRestClient studentRestClient) {
		this.absenceRepository = absenceRepository;
		this.courseRestClient = courseRestClient;
		this.studentRestClient = studentRestClient;
	}

	public static void main(String[] args) {
		SpringApplication.run(AbsenceServiceApplication.class, args);
	}

	@Override
	public void run(String... args) {
		for (int i = 0; i < 5; i++) {
			Student student = studentRestClient.getStudentById(1L);
			Course course = courseRestClient.getCourseById(1L);
			Absence absence = new Absence();
			absence.setCourseID(course.getId());
			absence.setStudentID(student.getId());
			absenceRepository.save(absence);
		}
	}
}