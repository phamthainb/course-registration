package com.dangki.data.repository;

import com.dangki.data.entities.Details;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the Details entity.
 */
@Repository
public interface DetailsRepository extends JpaRepository<Details, Long> {

    @Query(value = "select distinct details from Details details left join fetch details.weeks",
        countQuery = "select count(distinct details) from Details details")
    Page<Details> findAllWithEagerRelationships(Pageable pageable);

    @Query("select distinct details from Details details left join fetch details.weeks")
    List<Details> findAllWithEagerRelationships();

    @Query("select details from Details details left join fetch details.weeks where details.id =:id")
    Optional<Details> findOneWithEagerRelationships(@Param("id") Long id);
}
