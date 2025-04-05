package com.prabhakar.rentanddrive.service;

import com.prabhakar.rentanddrive.model.Car;
import com.prabhakar.rentanddrive.model.request.car.AddCarRequest;
import com.prabhakar.rentanddrive.model.request.car.UpdateCarRequest;
import org.springframework.data.domain.Page;

import java.util.List;

public interface CarService {
    Car add(AddCarRequest addCarRequest);
    Car getCarByModel(String model);
    Car getCarById(String id);
    Page<Car> getAllCars(int page, int size);
    Car updateCar(String id, UpdateCarRequest updateCarRequest);
    void deleteCarById(String id);
}
