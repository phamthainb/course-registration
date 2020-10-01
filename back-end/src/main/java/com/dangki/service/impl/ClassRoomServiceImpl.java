package com.dangki.service.impl;

import com.dangki.common.utils.Converter;
import com.dangki.data.dto.ClassRoomDto;
import com.dangki.data.dto.DetailsDto;
import com.dangki.data.entities.ClassRoom;
import com.dangki.data.entities.Details;
import com.dangki.data.entities.Subject;
import com.dangki.data.repository.ClassRoomRepository;
import com.dangki.data.repository.DetailsRepository;
import com.dangki.data.repository.SubjectRepository;
import com.dangki.service.ClassRoomService;
import com.dangki.service.DetailsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

/**
 * Service Implementation for managing {@link ClassRoom}.
 */
@Service
@Transactional
public class ClassRoomServiceImpl implements ClassRoomService {

    private final Logger log = LoggerFactory.getLogger(ClassRoomServiceImpl.class);

    private final ClassRoomRepository classRoomRepository;

    private final SubjectRepository subjectRepository;

    private final DetailsRepository detailsRepository;

    private final DetailsService detailsService;

    private final Converter<ClassRoomDto , ClassRoom> converter = new Converter<>(ClassRoomDto.class,ClassRoom.class);
    private final Converter<DetailsDto, Details> detailsConverter = new Converter<>(DetailsDto.class,Details.class);

    public ClassRoomServiceImpl(ClassRoomRepository classRoomRepository, SubjectRepository subjectRepository, DetailsRepository detailsRepository, DetailsService detailsService) {
        this.classRoomRepository = classRoomRepository;
        this.subjectRepository = subjectRepository;
        this.detailsRepository = detailsRepository;
        this.detailsService = detailsService;
    }

    @Override
    public List<ClassRoomDto> add(List<ClassRoomDto> classRooms) {
        List<ClassRoomDto> result = new ArrayList<>();
        classRooms.forEach(classRoomDto -> {
            ClassRoom classRoom = converter.toEntity(classRoomDto);
            Subject subject = subjectRepository.findByName(classRoomDto.getSubject().getName());
            if (subject == null)
            {
                subject = new Subject();
                subject.name(classRoomDto.getSubject().getName())
                        .code(classRoomDto.getSubject().getCode())
                        .credit(classRoomDto.getSubject().getCredit())
                        .fee(500000*subject.getCredit());
                subject = subjectRepository.save(subject);
            }
            classRoom.setSubject(subject);
            Set<Details> detailsSet = new HashSet<>();
            classRoomDto.getDetails().forEach(detailsDto -> {
                Details details = detailsRepository.find(detailsDto.getTime().getName(),
                        detailsDto.getTime().getLesson(),detailsDto.getProfessor().getName());
                if (details == null)
                    details = detailsConverter.toEntity(detailsService.add(detailsDto));
                detailsSet.add(details);
            });
            classRoom.setDetails(detailsSet);
            result.add(converter.toDto(classRoomRepository.save(classRoom)));
        });
        return result;
    }

    @Override
    public ClassRoom update(ClassRoom classRoom) {
        log.debug("Request to save ClassRoom : {}", classRoom);
        return classRoomRepository.save(classRoom);
    }


    @Override
    @Transactional(readOnly = true)
    public Page<ClassRoom> findAll(Pageable pageable) {
        log.debug("Request to get all ClassRooms");
        return classRoomRepository.findAll(pageable);
    }


    public Page<ClassRoom> findAllWithEagerRelationships(Pageable pageable) {
        return classRoomRepository.findAllWithEagerRelationships(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<ClassRoom> findOne(Long id) {
        log.debug("Request to get ClassRoom : {}", id);
        return classRoomRepository.findOneWithEagerRelationships(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete ClassRoom : {}", id);
        classRoomRepository.deleteById(id);
    }
}
