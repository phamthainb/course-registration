package com.dangki.service;

import com.dangki.data.dto.LogDto;

import java.util.List;

public interface LogService {
    LogDto add(LogDto logDto);
    LogDto update(LogDto logDto);
    void delete(List<LogDto> logs);
    List<LogDto> findAll();
}
