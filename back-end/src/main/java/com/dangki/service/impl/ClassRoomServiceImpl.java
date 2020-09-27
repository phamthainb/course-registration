package com.dangki.service.impl;

import com.dangki.data.entities.ClassRoom;
import com.dangki.data.repository.ClassRoomRepository;
import com.dangki.service.ClassRoomService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing {@link ClassRoom}.
 */
@Service
@Transactional
public class ClassRoomServiceImpl implements ClassRoomService {

    private final Logger log = LoggerFactory.getLogger(ClassRoomServiceImpl.class);

    private final ClassRoomRepository classRoomRepository;

    public ClassRoomServiceImpl(ClassRoomRepository classRoomRepository) {
        this.classRoomRepository = classRoomRepository;
    }

    @Override
    public ClassRoom save(ClassRoom classRoom) {
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
