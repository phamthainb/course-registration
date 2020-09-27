package com.dangki.service.impl;

import com.dangki.data.dto.ParamDto;
import com.dangki.data.entities.Semester;
import com.dangki.data.entities.Subject;
import com.dangki.data.entities.SubjectSemesterUser;
import com.dangki.data.entities.User;
import com.dangki.data.repository.SubjectSemesterUserRepository;
import com.dangki.service.SubjectSemesterUserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing {@link SubjectSemesterUser}.
 */
@Service
@Transactional
public class SubjectSemesterUserServiceImpl implements SubjectSemesterUserService {

    private final Logger log = LoggerFactory.getLogger(SubjectSemesterUserServiceImpl.class);

    private final SubjectSemesterUserRepository subjectSemesterUserRepository;

    public SubjectSemesterUserServiceImpl(SubjectSemesterUserRepository subjectSemesterUserRepository) {
        this.subjectSemesterUserRepository = subjectSemesterUserRepository;
    }

    @Override
    public SubjectSemesterUser add(ParamDto paramDto) {
        SubjectSemesterUser subjectSemesterUser = new SubjectSemesterUser();
        Subject subject = new Subject();
        subject.setId(paramDto.getSemesterId());
        User user = new User();
        user.setId(paramDto.getUserId());
        Semester semester = new Semester();
        semester.setId(paramDto.getSemesterId());
        subjectSemesterUser.subject(subject).user(user).semester(semester);
        return subjectSemesterUserRepository.save(subjectSemesterUser);
    }

    @Override
    public SubjectSemesterUser update(SubjectSemesterUser subjectSemesterUser) {
        return subjectSemesterUserRepository.save(subjectSemesterUser);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<SubjectSemesterUser> findAll(Pageable pageable) {
        log.debug("Request to get all SubjectSemesterUsers");
        return subjectSemesterUserRepository.findAll(pageable);
    }


    @Override
    @Transactional(readOnly = true)
    public Optional<SubjectSemesterUser> findOne(Long id) {
        log.debug("Request to get SubjectSemesterUser : {}", id);
        return subjectSemesterUserRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete SubjectSemesterUser : {}", id);
        subjectSemesterUserRepository.deleteById(id);
    }
}
