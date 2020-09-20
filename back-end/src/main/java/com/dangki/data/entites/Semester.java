package com.dangki.data.entites;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "semesters")
public class Semester extends BaseEntity {
    @Column(name = "code")
    private String code;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

}
