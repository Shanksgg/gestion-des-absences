package emsi.ma.studentservice;

import emsi.ma.studentservice.entity.Student;
import emsi.ma.studentservice.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.text.SimpleDateFormat;

@SpringBootApplication
public class StudentServiceApplication implements CommandLineRunner  {

    @LoadBalanced
    public static void main(String[] args) {
        SpringApplication.run(StudentServiceApplication.class, args);
    }

    @Autowired
    StudentRepository studentRepository;
    @Autowired
    RepositoryRestConfiguration repositoryRestConfiguration;

    @Override
    public void run(String... args) throws Exception {
        repositoryRestConfiguration.exposeIdsFor(Student.class);
        studentRepository.save(new Student(null,"Anass Soukrat","QAGG","QAFF",new SimpleDateFormat("dd-MM-yyyy").parse("10-08-2000"),"anass@gmail.com"));
    }
}