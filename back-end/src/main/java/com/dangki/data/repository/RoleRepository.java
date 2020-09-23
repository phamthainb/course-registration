package com.dangki.data.repository;


import com.dangki.data.entites.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RoleRepository  extends JpaRepository<Role,Integer> {
    @Query(value = "select r from Role r where r.code=:code")
    List<Role> findByCode(@Param("code") String code);
}
