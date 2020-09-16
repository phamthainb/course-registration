package com.dangki.data.entites;

import javax.persistence.*;

@Entity
@Table(name = "week_of_time")
public class Week extends BaseEntity {
    @Column(name = "week")
    private Integer week;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "time_id")
    private Time time;

    public Integer getWeek() {
        return week;
    }

    public void setWeek(Integer week) {
        this.week = week;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }
}
