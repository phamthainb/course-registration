package com.dangki.service;

import com.dangki.data.dto.WeekDto;

import java.util.List;

public interface WeekService {
    WeekDto add(WeekDto weekDto);
    WeekDto update(WeekDto weekDto);
    void delete(List<WeekDto> weeks);
    List<WeekDto> findAll();
}
