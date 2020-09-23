package com.dangki.service;

import com.dangki.data.dto.ProfessorDto;
import com.dangki.data.dto.UserDto;

import java.util.List;

public interface ProfessorService {
    ProfessorDto add(ProfessorDto professorDto);
    ProfessorDto update(ProfessorDto professorDto);
    void delete(List<ProfessorDto> professorDtos);
    List<ProfessorDto> findAll();
}
