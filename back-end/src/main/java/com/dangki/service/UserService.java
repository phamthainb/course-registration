package com.dangki.service;

import com.dangki.data.dto.UserDto;
import com.dangki.data.entities.ClassRoom;

import java.util.List;

public interface UserService {
    UserDto add(UserDto userDto);
    UserDto update(UserDto userDto);
    UserDto updateClass(List<ClassRoom> classRooms);
    void delete(List<UserDto> users);
    void removeClasses(List<ClassRoom> ClassRoom);
    List<UserDto> findAll();
    List<UserDto> findAllUsersOfClassRoom(Long id);
}
