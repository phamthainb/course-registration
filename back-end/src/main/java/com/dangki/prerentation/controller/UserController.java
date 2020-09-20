package com.dangki.prerentation.controller;

import com.dangki.common.utils.SecurityConstants;
import com.dangki.data.MyUserDetails;
import com.dangki.data.dto.UserDto;
import com.dangki.service.JwtUtil;
import com.dangki.service.MyUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
//@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private MyUserDetailsService myUserDetailsService;
    @Autowired
    private JwtUtil util;
    @GetMapping("/")
    public ResponseEntity<?> hello()
    {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        MyUserDetails userDetails = (MyUserDetails) authentication.getPrincipal();
        return ResponseEntity.ok(userDetails.getUser());
    }
    @PostMapping("/authenticate")
    public ResponseEntity<?> authentication(@RequestBody UserDto userDto) throws Exception {
        try {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                userDto.getUsername(),userDto.getPassword()));
        }
        catch (BadCredentialsException e){
            throw new Exception("Invalid username",e);
        }
        UserDetails userDetails = myUserDetailsService.loadUserByUsername(userDto.getUsername());
        String jwt = util.generateToken(userDetails);
        return ResponseEntity.ok(SecurityConstants.JWT_TOKEN_PREFIX+jwt);
    }
}
