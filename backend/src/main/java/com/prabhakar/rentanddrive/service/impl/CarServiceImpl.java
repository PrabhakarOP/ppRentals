package com.prabhakar.rentanddrive.service.impl;

import com.prabhakar.rentanddrive.exception.ResourceAlreadyExistExeption;
import com.prabhakar.rentanddrive.exception.ResourceNotFoundException;
import com.prabhakar.rentanddrive.model.Car;
import com.prabhakar.rentanddrive.model.request.car.AddCarRequest;
import com.prabhakar.rentanddrive.model.request.car.UpdateCarRequest;
import com.prabhakar.rentanddrive.repository.CarRepository;
import com.prabhakar.rentanddrive.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CarServiceImpl implements CarService {
    @Autowired
    private CarRepository carRepository;

    @Override
    public Car add(AddCarRequest addCarRequest) {

        // check already exist
        Optional<Car> existingCar = carRepository.findByModel(addCarRequest.getModel());
        if (existingCar.isPresent()) {
            throw new ResourceAlreadyExistExeption("Car with this model already exists");
        }

        Car car = new Car();
        car.setBrand(addCarRequest.getBrand());
        car.setModel(addCarRequest.getModel());
        car.setYear(addCarRequest.getYear());
        car.setPhotoUrl(addCarRequest.getPhotoUrl());
        car.setBodyType(addCarRequest.getBodyType());
        car.setFuelType(addCarRequest.getFuelType());
        car.setTransmission(addCarRequest.getTransmission());
        car.setPricePerDay(addCarRequest.getPricePerDay());
        car.setImagesUrl(addCarRequest.getImagesUrl());
        car.setSpecs(addCarRequest.getSpecs());
        car.setAvailable(true); // Default to available when added
        return carRepository.save(car);
    }

    @Override
    public Car getCarByModel(String model) {
        return carRepository.findByModel(model).orElseThrow(() -> new ResourceNotFoundException("Car not found"));
    }

    @Override
    public Car getCarById(String id) {
        return carRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Car not found"));
    }

    @Override
    public Page<Car> getAllCars(int page, int size) {
        return carRepository.findAll(PageRequest.of(page, size));
    }

    @Override
    public Car updateCar(String id, UpdateCarRequest updateCarRequest) {
        Car existingCar = carRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Car not found"));

        existingCar.setBrand(updateCarRequest.getBrand());
        existingCar.setModel(updateCarRequest.getModel());
        existingCar.setYear(updateCarRequest.getYear());
        existingCar.setPhotoUrl(updateCarRequest.getPhotoUrl());
        existingCar.setBodyType(updateCarRequest.getBodyType());
        existingCar.setFuelType(updateCarRequest.getFuelType());
        existingCar.setTransmission(updateCarRequest.getTransmission());
        existingCar.setPricePerDay(updateCarRequest.getPricePerDay());
        existingCar.setImagesUrl(updateCarRequest.getImagesUrl());
        existingCar.setSpecs(updateCarRequest.getSpecs());
        return carRepository.save(existingCar);

    }

    @Override
    public void deleteCarById(String id) {
        //check if car exist
        Car existingCarOpt = carRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Car not found"));

        carRepository.deleteById(id);
    }

    @Override
    public Page<Car> getCarsByBodyType(String bodyType, int page, int size) {
        Pageable pageable= PageRequest.of(page,size);
        Page<Car> carPage=carRepository.findByBodyType(bodyType,pageable);

        if(carPage.getTotalElements()==0){
            throw new ResourceNotFoundException("No Cars fot the body type available");
        }
        return carPage;
    }
}
