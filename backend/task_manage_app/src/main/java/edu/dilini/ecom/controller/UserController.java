package edu.dilini.ecom.controller;

import edu.dilini.ecom.dto.User;
import edu.dilini.ecom.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User request) {
        userService.registerUser(request);
        return ResponseEntity.ok("User registered successfully!");
    }


}
