package com.prabhakar.rentanddrive.controller;

import com.prabhakar.rentanddrive.model.User;
import com.prabhakar.rentanddrive.model.base.ApiResponse;
import com.prabhakar.rentanddrive.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping
    public ApiResponse<User> addUser(@RequestBody User user) {
        return new ApiResponse<>(userService.addUser(user),true,false,null);
    }

    @GetMapping("/id")
    public ApiResponse<User> getUserById(@RequestParam String id) {
        return new ApiResponse<>(userService.getUserById(id),true,false,null);
    }

    @GetMapping("/email")
    public ApiResponse<User> getUserByEmail(@RequestParam String email) {
        return new ApiResponse<>(userService.getUserByEmail(email),true,false,null);
    }

    @GetMapping("/phone")
    public ApiResponse<User> getUserByPhone(@RequestParam String phone) {
        return new ApiResponse<>(userService.getUserByPhone(phone),true,false,null);
    }

    @GetMapping
    public ApiResponse<Page<User>> getAllUsers(@RequestParam int page, @RequestParam int size) {
        return new ApiResponse<>(userService.getAllUsers(page, size),true,false,null);
    }

    @GetMapping("/name")
    public ApiResponse<Page<User>> getAllUsersByName(@RequestParam String name, @RequestParam int page, @RequestParam int size) {
        return new ApiResponse<>(userService.getAllUsersByName(name, page, size),true,false,null);
    }

    @PutMapping
    public ApiResponse<User> updateUser(@RequestBody User updatedUser) {
        return new ApiResponse<>(userService.updateUser(updatedUser),true,false,null);
    }

    @DeleteMapping("/id")
    public void deleteUserById(@RequestParam String id) {
        userService.deleteUserById(id);
    }
}
