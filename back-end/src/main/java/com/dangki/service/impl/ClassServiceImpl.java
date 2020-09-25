package com.dangki.service.impl;

import com.dangki.common.utils.Converter;
import com.dangki.data.dto.ClassDto;
import com.dangki.data.dto.UserDto;
import com.dangki.data.entites.User;
import com.dangki.data.repository.RoleRepository;
import com.dangki.data.repository.UserRepository;
import com.dangki.service.ClassService;
import com.dangki.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ClassServiceImpl implements ClassService {

    @Override
    public ClassDto add(ClassDto classDto) {
        return null;
    }

    @Override
    public ClassDto update(ClassDto classDto) {
        return null;
    }

    @Override
    public void delete(List<ClassDto> classes) {

    }

    @Override
    public List<ClassDto> findAll() {
        return null;
    }
}
