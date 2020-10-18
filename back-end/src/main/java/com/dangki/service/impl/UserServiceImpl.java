package com.dangki.service.impl;

import com.dangki.common.utils.Converter;
import com.dangki.common.utils.SecurityUtil;
import com.dangki.data.dto.ClassRoomDto;
import com.dangki.data.dto.UserDto;
import com.dangki.data.entities.ClassRoom;
import com.dangki.data.entities.User;
import com.dangki.data.repository.ClassRoomRepository;
import com.dangki.data.repository.RoleRepository;
import com.dangki.data.repository.UserRepository;
import com.dangki.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private ClassRoomRepository classRoomRepository;
    @Autowired
    private SecurityUtil securityUtil;
    private final Converter<UserDto, User> converter = new Converter<>(UserDto.class,User.class);
    @Override
    @Transactional
    public List<UserDto> add(List<UserDto> userDtos) {
        List<UserDto> list = new ArrayList<>();
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        userDtos.forEach(userDto -> {
            User user = converter.toEntity(userDto);
            String password = user.getCode();
            String username = user.getCode();
            user.setPassword(passwordEncoder.encode(password));
            user.setUsername(username);
            user.setActive(true);
            user.setRoles(roleRepository.findByName("USER"));
            list.add(converter.toDto(userRepository.save(user)));
        });
        return list;
    }

    @Override
    @Transactional
    public UserDto update(UserDto userDto) {
        User user = userRepository.findById(userDto.getId()).get();
        User result = converter.toEntity(userDto);
        result.setUsername(user.getUsername());
        result.setRoles(user.getRoles());
//        result.setClasses(user.getClasses());
        result.setProfessor(user.getProfessor());
        return converter.toDto(userRepository.save(result));
    }

    @Override
    public UserDto updateClass(List<ClassRoomDto> classRooms) {
        User user = converter.toEntity(securityUtil.getUserDetails().getUser());
        List<ClassRoom> list = new ArrayList<>();
        classRooms.forEach(classRoomDto -> {
            list.add(classRoomRepository.findById(classRoomDto.getId()).get());
        });
        user.setClassRooms(list);
        user = userRepository.save(user);
        return converter.toDto(user);
    }

    @Override
    @Transactional
    public void delete(List<UserDto> users) {
        List<User> list = converter.toEntity(users);
        userRepository.deleteAll(list);
    }

    @Override
    public void removeClasses(List<ClassRoom> classRooms) {
        User user = converter.toEntity(securityUtil.getUserDetails().getUser());
        boolean list = user.getClassRooms().removeAll(classRooms);
        userRepository.save(user);
    }

    @Override
    @Transactional(readOnly = true)
    public List<UserDto> findAll() {
        return converter.toDto(userRepository.findAll());
    }

    @Override
    public List<UserDto> findAllUsersOfClassRoom(Long id) {
        return converter.toDto(userRepository.findAllByClassRoomId(id));
    }
}
