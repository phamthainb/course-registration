package com.dangki.data.entites;

import javax.persistence.*;

@Entity
@Table(name = "weeks")
public class Week extends BaseEntity {
    @Column(name = "name")
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
