package com.prabhakar.rentanddrive.service.impl;

import com.prabhakar.rentanddrive.exception.ResourceAlreadyExistExeption;
import com.prabhakar.rentanddrive.exception.ResourceNotFoundException;
import com.prabhakar.rentanddrive.model.User;
import com.prabhakar.rentanddrive.repository.UserRepository;
import com.prabhakar.rentanddrive.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Override
    public User addUser(User user) {
        if(userRepository.existsByEmail(user.getEmail())) {
            throw new ResourceAlreadyExistExeption("User already exists with email: " + user.getEmail());
        }
        return userRepository.save(user);
    }

    @Override
    public User getUserById(String id) {
        return userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
    }

    @Override
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email).orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + email));
    }

    @Override
    public User getUserByPhone(String phone) {
        return userRepository.findByPhone(phone).orElseThrow(() -> new ResourceNotFoundException("User not found with phone: " + phone));
    }

    @Override
    public Page<User> getAllUsers(int page, int size) {
        return userRepository.findAll(PageRequest.of(page, size));
    }

    @Override
    public Page<User> getAllUsersByName(String name, int page, int size) {
        return userRepository.findAllByName(name, PageRequest.of(page, size));
    }

    @Override
    public User updateUser( User updatedUser) {
        User existingUser = userRepository.findByEmail(updatedUser.getEmail()).orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + updatedUser.getEmail()));
        existingUser.setName(updatedUser.getName());
        existingUser.setPhone(updatedUser.getPhone());
        existingUser.setPassword(updatedUser.getPassword());
        existingUser.setProfilePhotoUrl(updatedUser.getProfilePhotoUrl());
        return userRepository.save(existingUser);
    }

    @Override
    public void deleteUserById(String id) {
        if(userRepository.existsById(id)) {
            userRepository.deleteById(id);
        }
        else{
            throw new ResourceNotFoundException("User not found with id: " + id);
        }
    }
}
