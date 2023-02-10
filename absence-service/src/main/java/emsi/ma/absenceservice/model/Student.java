package emsi.ma.absenceservice.model;

import lombok.Data;

import java.util.Date;

@Data
public class Student {
        private Long id;
        private String nom;
        private String cin;
        private String cne;
        private Date dateNaissance;
        private String email;
}