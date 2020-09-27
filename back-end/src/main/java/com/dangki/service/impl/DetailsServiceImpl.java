package com.dangki.service.impl;

import com.dangki.data.entities.Details;
import com.dangki.data.repository.DetailsRepository;
import com.dangki.service.DetailsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing {@link Details}.
 */
@Service
@Transactional
public class DetailsServiceImpl implements DetailsService {

    private final Logger log = LoggerFactory.getLogger(DetailsServiceImpl.class);

    private final DetailsRepository detailsRepository;

    public DetailsServiceImpl(DetailsRepository detailsRepository) {
        this.detailsRepository = detailsRepository;
    }

    @Override
    public Details save(Details details) {
        log.debug("Request to save Details : {}", details);
        return detailsRepository.save(details);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<Details> findAll(Pageable pageable) {
        log.debug("Request to get all Details");
        return detailsRepository.findAll(pageable);
    }


    public Page<Details> findAllWithEagerRelationships(Pageable pageable) {
        return detailsRepository.findAllWithEagerRelationships(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Details> findOne(Long id) {
        log.debug("Request to get Details : {}", id);
        return detailsRepository.findOneWithEagerRelationships(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Details : {}", id);
        detailsRepository.deleteById(id);
    }
}
