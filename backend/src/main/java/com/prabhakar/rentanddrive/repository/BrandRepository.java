package com.prabhakar.rentanddrive.repository;

import com.prabhakar.rentanddrive.model.Brand;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Optional;

@Repository
public interface BrandRepository extends MongoRepository<Brand,String> {
    Optional<Brand> findByName(String name);
}
