package com.dangki.data.dto;

import com.dangki.data.entites.Time;

public class WeekDto extends BaseDto {
    private Integer week;
    private TimeDto time;

    public Integer getWeek() {
        return week;
    }

    public void setWeek(Integer week) {
        this.week = week;
    }

    public TimeDto getTime() {
        return time;
    }

    public void setTime(TimeDto time) {
        this.time = time;
    }
}
