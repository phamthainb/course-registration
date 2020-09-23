package com.dangki.service;

import com.dangki.data.dto.SemesterDto;
import com.dangki.data.dto.UserDto;

import java.util.List;

public interface SemesterService {
    SemesterDto add(SemesterDto semesterDto);
    SemesterDto update(SemesterDto semesterDto);
    void delete(List<SemesterDto> semesterDtos);
    List<SemesterDto> findAll();
}
