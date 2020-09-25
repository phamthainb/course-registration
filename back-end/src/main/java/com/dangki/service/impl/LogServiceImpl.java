package com.dangki.service.impl;

import com.dangki.data.dto.ClassDto;
import com.dangki.data.dto.LogDto;
import com.dangki.service.ClassService;
import com.dangki.service.LogService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class LogServiceImpl implements LogService {

    @Override
    public LogDto add(LogDto logDto) {
        return null;
    }

    @Override
    public LogDto update(LogDto logDto) {
        return null;
    }

    @Override
    public void delete(List<LogDto> logs) {

    }

    @Override
    public List<LogDto> findAll() {
        return null;
    }
}
