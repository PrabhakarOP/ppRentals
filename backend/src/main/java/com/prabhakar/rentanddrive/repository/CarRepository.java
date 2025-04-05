package com.prabhakar.rentanddrive.repository;

import com.prabhakar.rentanddrive.model.Car;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRepository extends MongoRepository<Car,String> {
}
