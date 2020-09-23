package com.dangki.data.entites;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "time_of_class")
public class Time extends BaseEntity {
    @Column(name = "lesson")
    private Integer lesson;
    @Column(name = "room")
    private String room;
    @Column(name = "day")
    private String day;
    @OneToMany(mappedBy = "time")
    private List<Week> weeks;

    public Integer getLesson() {
        return lesson;
    }

    public void setLesson(Integer lesson) {
        this.lesson = lesson;
    }

    public String getRoom() {
        return room;
    }

    public void setRoom(String room) {
        this.room = room;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public List<Week> getWeeks() {
        return weeks;
    }

    public void setWeeks(List<Week> weeks) {
        this.weeks = weeks;
    }
}
