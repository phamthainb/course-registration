package com.dangki.data.entites;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "class")
public class Class extends BaseEntity {
    @Column(name = "nmh")
    private Integer nmh;
    @Column(name = "tth")
    private Integer tth;
    @Column(name = "code")
    private String code;
    @Column(name = "quantity")
    private Integer quantity;
    @Column(name = "slot")
    private Integer slot;
    @ManyToOne(fetch = FetchType.LAZY , cascade = CascadeType.ALL)
    @JoinColumn(name = "professor_id")
    private Professor professor;
    @ManyToOne(fetch = FetchType.LAZY , cascade = CascadeType.ALL)
    @JoinColumn(name = "subject_id")
    private Subject subject;
    @ManyToMany(cascade = CascadeType.ALL , fetch = FetchType.LAZY)
    @JoinTable(name = "class_user" , joinColumns = @JoinColumn(name = "class_id")
                , inverseJoinColumns = @JoinColumn(name = "user_id"))
    private List<User> users;
    @ManyToMany(cascade = CascadeType.ALL , fetch = FetchType.LAZY)
    @JoinTable(name = "time_class" , joinColumns = @JoinColumn(name = "class_id"),
                inverseJoinColumns = @JoinColumn(name = "time_id"))
    private List<Time> times;

    public List<Time> getTimes() {
        return times;
    }

    public void setTimes(List<Time> times) {
        this.times = times;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    public Integer getNmh() {
        return nmh;
    }

    public void setNmh(Integer nmh) {
        this.nmh = nmh;
    }

    public Integer getTth() {
        return tth;
    }

    public void setTth(Integer tth) {
        this.tth = tth;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getSlot() {
        return slot;
    }

    public void setSlot(Integer slot) {
        this.slot = slot;
    }

    public Professor getProfessor() {
        return professor;
    }

    public void setProfessor(Professor professor) {
        this.professor = professor;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> userEntities) {
        this.users = userEntities;
    }
}
