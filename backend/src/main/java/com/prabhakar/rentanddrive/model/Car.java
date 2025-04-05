package com.prabhakar.rentanddrive.model;

import com.prabhakar.rentanddrive.model.embeddable.Specifications;
import com.prabhakar.rentanddrive.model.enums.BodyType;
import com.prabhakar.rentanddrive.model.enums.FuelType;
import lombok.Data;

@Data
public class Car {
    private String id;
    private String brand;
    private String model;
    private String year;
    private String photoUrl;
    private BodyType bodyType;
    private FuelType fuelType;
    private String Transmission;
    private double pricePerDay;
    private String[] imagesUrl;
    private Specifications specs;
    private boolean isAvailable;
    private float rating;
    private int reviewCount;
}
