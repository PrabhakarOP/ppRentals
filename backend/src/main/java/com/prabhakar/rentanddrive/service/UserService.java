package com.prabhakar.rentanddrive.service;

import com.prabhakar.rentanddrive.model.User;
import org.springframework.data.domain.Page;

public interface UserService {
    User addUser(User user);
    User getUserById(String id);
    User getUserByEmail(String email);
    User getUserByPhone(String phone);
    Page<User> getAllUsers(int page, int size);
    Page<User> getAllUsersByName(String name, int page, int size);
    User updateUser(User updatedUser);
    void deleteUserById(String id);

    User login(String email, String password);
}
