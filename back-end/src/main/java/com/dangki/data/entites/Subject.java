package com.dangki.data.entites;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "subjects" , uniqueConstraints = @UniqueConstraint(columnNames = "code_subject"))
public class Subject extends BaseEntity {
    @Column(name = "name")
    private String name;
    @Column(name = "code_subject")
    private String code;
    @Column(name = "credit")
    private Integer credit;
    @Column(name = "tuition_free")
    private Integer fee;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Integer getCredit() {
        return credit;
    }

    public void setCredit(Integer credit) {
        this.credit = credit;
    }

    public Integer getFee() {
        return fee;
    }

    public void setFee(Integer fee) {
        this.fee = fee;
    }
}
