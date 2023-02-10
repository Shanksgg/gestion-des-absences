package com.example.professorservice;

import com.example.professorservice.repository.ProfessorRepository;
import com.example.professorservice.entity.Professor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.text.SimpleDateFormat;

@SpringBootApplication
public class ProfessorServiceApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(ProfessorServiceApplication.class, args);
    }

    @Autowired
    ProfessorRepository professorRepository;
    @Override
    public void run(String... args) throws Exception {
        professorRepository.save(new Professor(null,"Anass","QAGG",new SimpleDateFormat("dd-MM-yyyy").parse("10-08-2000"),"anass@"));
    }
}