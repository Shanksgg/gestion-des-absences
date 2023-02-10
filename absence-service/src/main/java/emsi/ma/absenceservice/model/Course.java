package emsi.ma.absenceservice.model;

import lombok.Data;

@Data
public class Course {
    private Long id;
    private String name;
    private String annee;
    private int heure;
}