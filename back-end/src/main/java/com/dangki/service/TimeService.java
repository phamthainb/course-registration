package com.dangki.service;

import com.dangki.data.dto.TimeDto;

import java.util.List;

public interface TimeService {
    TimeDto add(TimeDto timeDto);
    TimeDto update(TimeDto timeDto);
    void delete(List<TimeDto> times);
    List<TimeDto> findAll();
}
