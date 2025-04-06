package com.prabhakar.rentanddrive.controller;

import com.prabhakar.rentanddrive.model.Car;
import com.prabhakar.rentanddrive.model.base.ApiResponse;
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
    public ApiResponse<Car> addCar(@RequestBody AddCarRequest addCarRequest) {
        Car car= carService.add(addCarRequest);
        return new ApiResponse<>(car,true,false,null);
    }

    @GetMapping("/id")
    public ApiResponse<Car> getCarById(@RequestParam String id) {
        Car car= carService.getCarById(id);
        return new ApiResponse<>(car,true,false,null);
    }

    @GetMapping("/model")
    public ApiResponse<Car> getCarByModel(@RequestParam String model) {
        Car car= carService.getCarByModel(model);
        return new ApiResponse<>(car,true,false,null);
    }

    @GetMapping
    public ApiResponse<Page<Car>> getAllCars(@RequestParam int page, @RequestParam int size) {
        Page<Car>  carPage=carService.getAllCars(page, size);
        return new ApiResponse<>(carPage,true,false,null);
    }

    @GetMapping("/bodytype")
    public ApiResponse<Page<Car>> getCarsByBodyType(@RequestParam String bodyType ,@RequestParam int page ,@RequestParam int size){
        Page<Car> carPage= carService.getCarsByBodyType(bodyType,page,size);
        return new ApiResponse<>(carPage,true,false,null);
    }


    @PutMapping("/id")
    public ApiResponse<Car> updateCar(@RequestParam String id, @RequestBody UpdateCarRequest updateCarRequest) {
        Car car= carService.updateCar(id, updateCarRequest);
        return new ApiResponse<>(car,true,false,null);
    }

    @DeleteMapping("/id")
    public void deleteCarById(@RequestParam String id) {
        carService.deleteCarById(id);
    }
}