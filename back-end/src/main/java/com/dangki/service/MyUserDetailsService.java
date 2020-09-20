package com.dangki.service;

import com.dangki.common.utils.Converter;
import com.dangki.data.MyUserDetails;
import com.dangki.data.dto.UserDto;
import com.dangki.data.entites.User;
import com.dangki.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class MyUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    private final Converter<UserDto,User> converter = new Converter<>(UserDto.class,User.class);
    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null)
            throw new UsernameNotFoundException("Invalid username");
        List<GrantedAuthority> authorities = new ArrayList<>();
        user.getRoles().forEach(role -> {
            authorities.add(new SimpleGrantedAuthority("ROLE_"+role.getCode()));
        });
        return new MyUserDetails(user.getUsername(), user.getPassword(),true,true,
                true,true,authorities,converter.toDto(user));
    }
}
