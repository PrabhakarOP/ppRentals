package com.prabhakar.rentanddrive.repository;

import com.prabhakar.rentanddrive.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findById(String id);
    Optional<User> findByEmail(String email);
    Optional<User> findByName(String username);
    Optional<User> findByPhone(String phone);
    Page<User> findAllByName(String name, org.springframework.data.domain.Pageable pageable);

    boolean existsByEmail(String email);

}
