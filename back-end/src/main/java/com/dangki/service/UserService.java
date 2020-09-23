package com.dangki.service;

import com.dangki.data.dto.UserDto;

import java.util.List;

public interface UserService {
    UserDto add(UserDto userDto);
    UserDto update(UserDto userDto);
    void delete(List<UserDto> users);
    List<UserDto> findAll();
}
