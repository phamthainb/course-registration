package com.dangki.service.impl;

import com.dangki.common.utils.Converter;
import com.dangki.data.dto.TimeDto;
import com.dangki.data.entites.Time;
import com.dangki.data.repository.TimeRepository;
import com.dangki.service.TimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class TimeServiceImpl implements TimeService {
    @Autowired
    private TimeRepository timeRepository;
    private final Converter<TimeDto, Time> converter = new Converter<>(TimeDto.class, Time.class);

    @Override
    @Transactional
    public TimeDto add(TimeDto timeDto) {
        return converter.toDto(timeRepository.save(converter.toEntity(timeDto)));
    }

    @Override
    public TimeDto update(TimeDto timeDto) {
        return converter.toDto(timeRepository.save(converter.toEntity(timeDto)));
    }

    @Override
    public void delete(List<TimeDto> times) {
        List<Time> list = converter.toEntity(times);
        timeRepository.deleteAll(list);
    }

    @Override
    public List<TimeDto> findAll() {
        return converter.toDto(timeRepository.findAll());
    }
}
