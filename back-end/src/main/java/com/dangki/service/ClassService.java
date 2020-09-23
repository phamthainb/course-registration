package com.dangki.service;

import com.dangki.data.dto.ClassDto;
import java.util.List;

public interface ClassService {
    ClassDto add(ClassDto classDto);
    ClassDto update(ClassDto classDto);
    void delete(List<ClassDto> classes);
    List<ClassDto> findAll();
}
