package com.dangki.data.dto;

import java.util.List;

public class TimeDto extends BaseDto {
    private Integer lesson;
    private String room;
    private String day;
    private List<WeekDto> weeks;

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

    public List<WeekDto> getWeeks() {
        return weeks;
    }

    public void setWeeks(List<WeekDto> weeks) {
        this.weeks = weeks;
    }
}
