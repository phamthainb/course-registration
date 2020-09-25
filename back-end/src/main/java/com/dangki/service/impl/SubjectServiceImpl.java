package com.dangki.service.impl;

import com.dangki.common.utils.Converter;
import com.dangki.data.dto.SubjectDto;
import com.dangki.data.entites.Subject;
import com.dangki.data.repository.SubjectRepository;
import com.dangki.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class SubjectServiceImpl implements SubjectService {

    @Autowired
    private SubjectRepository subjectRepository;

    private final Converter<SubjectDto, Subject> converter = new Converter<>(SubjectDto.class, Subject.class);

    @Override
    public SubjectDto add(SubjectDto subjectDto) {
        Subject subject = converter.toEntity(subjectDto);
        return converter.toDto(subjectRepository.save(subject));
    }

    @Override
    public SubjectDto update(SubjectDto subjectDto) {
        Subject subject = converter.toEntity(subjectDto);
        return converter.toDto(subjectRepository.save(subject));
    }

    @Override
    public void delete(List<SubjectDto> subjects) {
        List<Subject> subjectList = converter.toEntity(subjects);
        subjectRepository.deleteAll(subjectList);
    }

    @Override
    @Transactional(readOnly = true)
    public List<SubjectDto> findAll() {
        return converter.toDto(subjectRepository.findAll());
    }
}
