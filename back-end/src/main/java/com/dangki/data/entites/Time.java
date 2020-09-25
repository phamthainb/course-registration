package com.dangki.data.entites;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "times")
public class Time extends BaseEntity {
    @Column(name = "lesson")
    private Integer lesson;
    @Column(name = "room")
    private String room;
    @Column(name = "day")
    private String day;
    @ManyToMany(cascade = CascadeType.MERGE , fetch = FetchType.LAZY)
    @JoinTable(name = "time_week" , joinColumns = @JoinColumn(name = "time_id")
                , inverseJoinColumns = @JoinColumn(name = "week_id"))
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
