package com.dangki.data.dto;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class ClassRoomDto extends BaseDto {
    private Integer nhm;
    private Integer tth;
    private Integer quantity;
    private Integer slot;
    private SubjectDto subject;
    private Set<DetailsDto> details = new HashSet<>();
    private List<UserDto> users;

    public Integer getNhm() {
        return nhm;
    }

    public void setNhm(Integer nhm) {
        this.nhm = nhm;
    }

    public Integer getTth() {
        return tth;
    }

    public void setTth(Integer tth) {
        this.tth = tth;
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

    public SubjectDto getSubject() {
        return subject;
    }

    public void setSubject(SubjectDto subject) {
        this.subject = subject;
    }

    public Set<DetailsDto> getDetails() {
        return details;
    }

    public void setDetails(Set<DetailsDto> details) {
        this.details = details;
    }

    public List<UserDto> getUsers() {
        return users;
    }

    public void setUsers(List<UserDto> users) {
        this.users = users;
    }
}
