package com.dangki.service.impl;

import com.dangki.common.utils.Converter;
import com.dangki.data.dto.ClassDto;
import com.dangki.data.dto.ProfessorDto;
import com.dangki.data.dto.SubjectDto;
import com.dangki.data.entites.Professor;
import com.dangki.data.entites.Subject;
import com.dangki.data.repository.ProfessorRepository;
import com.dangki.service.ClassService;
import com.dangki.service.ProfessorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ProfessorServiceImpl implements ProfessorService {

    @Autowired
    private ProfessorRepository professorRepository;
    private final Converter<ProfessorDto, Professor> converter = new Converter<>(ProfessorDto.class, Professor.class);

    @Override
    public ProfessorDto add(ProfessorDto professorDto) {
        Professor professor = converter.toEntity(professorDto);
        return converter.toDto(professorRepository.save(professor));
    }

    @Override
    public ProfessorDto update(ProfessorDto professorDto) {
        Professor professor = converter.toEntity(professorDto);
        return converter.toDto(professorRepository.save(professor));
    }

    @Override
    public void delete(List<ProfessorDto> professorDtos) {
        List<Professor> professors = converter.toEntity(professorDtos);
        professorRepository.deleteAll(professors);
    }

    @Override
    public List<ProfessorDto> findAll() {
        List<Professor> professors = professorRepository.findAll();
        return converter.toDto(professors);
    }
}
