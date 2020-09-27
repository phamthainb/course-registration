package com.dangki.service;

import com.dangki.data.dto.ParamDto;
import com.dangki.data.entities.SubjectSemesterUser;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing {@link SubjectSemesterUser}.
 */
public interface SubjectSemesterUserService {

    /**
     * Save a subjectSemesterUser.
     *
     * @param params have user_id , semester_id and subject_id
     * @return the persisted entity.
     */
    SubjectSemesterUser add(ParamDto params);
    /**
     * Save a subjectSemesterUser.
     *
     * @param subjectSemesterUser is entity to update
     * @return the persisted entity.
     */
    SubjectSemesterUser update(SubjectSemesterUser subjectSemesterUser);
    /**
     * Get all the subjectSemesterUsers.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<SubjectSemesterUser> findAll(Pageable pageable);


    /**
     * Get the "id" subjectSemesterUser.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<SubjectSemesterUser> findOne(Long id);

    /**
     * Delete the "id" subjectSemesterUser.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
