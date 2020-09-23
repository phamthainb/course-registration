package com.dangki.data.dto;

import com.dangki.data.entites.Professor;
import com.dangki.data.entites.Subject;
import com.dangki.data.entites.Time;
import com.dangki.data.entites.User;

import java.util.List;

public class ClassDto extends BaseDto {
    private Integer nmh;
    private Integer tth;
    private String code;
    private Integer quantity;
    private Integer slot;
    private ProfessorDto professor;
    private SubjectDto subject;
    private List<UserDto> users;
    private List<TimeDto> times;

    public List<TimeDto> getTimes() {
        return times;
    }

    public void setTimes(List<TimeDto> times) {
        this.times = times;
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

    public ProfessorDto getProfessor() {
        return professor;
    }

    public void setProfessor(ProfessorDto professor) {
        this.professor = professor;
    }

    public SubjectDto getSubject() {
        return subject;
    }

    public void setSubject(SubjectDto subject) {
        this.subject = subject;
    }

    public List<UserDto> getUsers() {
        return users;
    }

    public void setUsers(List<UserDto> users) {
        this.users = users;
    }
}
