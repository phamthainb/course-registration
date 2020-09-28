package com.dangki.service.impl;

import com.dangki.common.utils.Converter;
import com.dangki.data.dto.UserDto;
import com.dangki.data.entities.User;
import com.dangki.data.repository.RoleRepository;
import com.dangki.data.repository.UserRepository;
import com.dangki.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    private final Converter<UserDto, User> converter = new Converter<>(UserDto.class,User.class);
    @Override
    @Transactional
    public UserDto add(UserDto userDto) {
        User user = converter.toEntity(userDto);
        user.setRoles(roleRepository.findByName("USER"));
        return converter.toDto(userRepository.save(user));
    }

    @Override
    @Transactional
    public UserDto update(UserDto userDto) {
        User user = userRepository.findById(userDto.getId()).get();
        User result = converter.toEntity(userDto);
        result.setUsername(user.getUsername());
        result.setRoles(user.getRoles());
        result.setClasses(user.getClasses());
        result.setProfessor(user.getProfessor());
        return converter.toDto(userRepository.save(result));
    }

    @Override
    @Transactional
    public void delete(List<UserDto> users) {
        List<User> list = converter.toEntity(users);
        userRepository.deleteAll(list);
    }

    @Override
    @Transactional(readOnly = true)
    public List<UserDto> findAll() {
        return converter.toDto(userRepository.findAll());
    }
}
