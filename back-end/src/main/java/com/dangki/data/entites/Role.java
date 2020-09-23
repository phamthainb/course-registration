package com.dangki.data.entites;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "roles")
public class Role extends BaseEntity {
    @Column(name = "code")
    private String code;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
