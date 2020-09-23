package com.dangki.service;

import com.dangki.data.dto.SubjectDto;
import com.dangki.data.dto.UserDto;

import java.util.List;

public interface SubjectService {
    SubjectDto add(SubjectDto subjectDto);
    SubjectDto update(SubjectDto subjectDto);
    void delete(List<SubjectDto> subjects);
    List<SubjectDto> findAll();
}
