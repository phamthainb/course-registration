package com.dangki.data.dto;

import com.dangki.data.entities.Professor;
import com.dangki.data.entities.Role;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class UserDto extends BaseDto {
    private String username;
    private String password;
    private String oldPassword = null;
    private String name;
    private String code;
    private String email;
    private String lop;
    private String phone;
    private Boolean active;
    private String birthday;
    private String major;
    private Professor professor;
    private String url;
    private List<Role> roles;
    private List<ClassRoomDto> classRooms;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getOldPassword() {
        return oldPassword;
    }

    public String getName() {
        return name;
    }

    public String getCode() {
        return code;
    }

    public String getEmail() {
        return email;
    }

    public String getLop() {
        return lop;
    }

    public String getPhone() {
        return phone;
    }

    public Boolean getActive() {
        return active;
    }

    public String getBirthday() {
        return birthday;
    }

    public String getMajor() {
        return major;
    }

    public List<Role> getRoles() {
        return roles;
    }

    public List<ClassRoomDto> getClassRooms() {
        return classRooms;
    }

    public Professor getProfessor() {
        return professor;
    }

    public void setProfessor(Professor professor) {
        this.professor = professor;
    }


    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public void setClassRooms(List<ClassRoomDto> classRooms) {
        this.classRooms = classRooms;
    }
}
