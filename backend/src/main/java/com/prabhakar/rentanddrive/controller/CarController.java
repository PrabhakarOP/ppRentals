package com.prabhakar.rentanddrive.controller;

import com.prabhakar.rentanddrive.model.Car;
import com.prabhakar.rentanddrive.model.request.car.AddCarRequest;
import com.prabhakar.rentanddrive.model.request.car.UpdateCarRequest;
import com.prabhakar.rentanddrive.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/car")
public class CarController {

    @Autowired
    private CarService carService;

    @PostMapping
    public Car addCar(@RequestBody AddCarRequest addCarRequest) {
        return carService.add(addCarRequest);
    }

    @GetMapping("/id")
    public Car getCarById(@RequestParam String id) {
        return carService.getCarById(id);
    }

    @GetMapping("/model")
    public Car getCarByModel(@RequestParam String model) {
        return carService.getCarByModel(model);
    }

    @GetMapping
    public Page<Car> getAllCars(@RequestParam int page, @RequestParam int size) {
        return carService.getAllCars(page, size);
    }

    @PutMapping("/id")
    public Car updateCar(@RequestParam String id, @RequestBody UpdateCarRequest updateCarRequest) {
        return carService.updateCar(id, updateCarRequest);
    }

    @DeleteMapping("/id")
    public void deleteCarById(@RequestParam String id) {
        carService.deleteCarById(id);
    }
}