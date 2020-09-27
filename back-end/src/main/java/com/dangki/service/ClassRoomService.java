package com.dangki.service;

import com.dangki.data.entities.ClassRoom;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing {@link ClassRoom}.
 */
public interface ClassRoomService {

    /**
     * Save a classRoom.
     *
     * @param classRoom the entity to save.
     * @return the persisted entity.
     */
    ClassRoom save(ClassRoom classRoom);

    /**
     * Get all the classRooms.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<ClassRoom> findAll(Pageable pageable);

    /**
     * Get all the classRooms with eager load of many-to-many relationships.
     *
     * @return the list of entities.
     */
    Page<ClassRoom> findAllWithEagerRelationships(Pageable pageable);


    /**
     * Get the "id" classRoom.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<ClassRoom> findOne(Long id);

    /**
     * Delete the "id" classRoom.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
