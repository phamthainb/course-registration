package com.dangki.data.repository;

import com.dangki.data.entities.ClassRoom;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the ClassRoom entity.
 */
@Repository
public interface ClassRoomRepository extends JpaRepository<ClassRoom, Long> {

    @Query(value = "select distinct classRoom from ClassRoom classRoom left join fetch classRoom.details left join fetch classRoom.users",
        countQuery = "select count(distinct classRoom) from ClassRoom classRoom")
    Page<ClassRoom> findAllWithEagerRelationships(Pageable pageable);

    @Query("select distinct classRoom from ClassRoom classRoom left join fetch classRoom.details left join fetch classRoom.users")
    List<ClassRoom> findAllWithEagerRelationships();

    @Query("select classRoom from ClassRoom classRoom left join fetch classRoom.details left join fetch classRoom.users where classRoom.id =:id")
    Optional<ClassRoom> findOneWithEagerRelationships(@Param("id") Long id);

}
