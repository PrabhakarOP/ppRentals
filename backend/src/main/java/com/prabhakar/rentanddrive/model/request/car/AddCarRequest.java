package com.prabhakar.rentanddrive.model.request.car;

import com.prabhakar.rentanddrive.model.embeddable.Specifications;
import com.prabhakar.rentanddrive.model.enums.BodyType;
import com.prabhakar.rentanddrive.model.enums.FuelType;

public class AddCarRequest {
     String brand;
     String model;
     String year;
     String photoUrl;
     BodyType bodyType;
     FuelType fuelType;
     String Transmission;
     String[] imagesUrl;
     Specifications specs;

     public String getBrand() {
          return brand;
     }

     public void setBrand(String brand) {
          this.brand = brand;
     }

     public String getModel() {
          return model;
     }

     public void setModel(String model) {
          this.model = model;
     }

     public String getYear() {
          return year;
     }

     public void setYear(String year) {
          this.year = year;
     }

     public String getPhotoUrl() {
          return photoUrl;
     }

     public void setPhotoUrl(String photoUrl) {
          this.photoUrl = photoUrl;
     }

     public BodyType getBodyType() {
          return bodyType;
     }

     public void setBodyType(BodyType bodyType) {
          this.bodyType = bodyType;
     }

     public FuelType getFuelType() {
          return fuelType;
     }

     public void setFuelType(FuelType fuelType) {
          this.fuelType = fuelType;
     }

     public String getTransmission() {
          return Transmission;
     }

     public void setTransmission(String transmission) {
          Transmission = transmission;
     }

     public String[] getImagesUrl() {
          return imagesUrl;
     }

     public void setImagesUrl(String[] imagesUrl) {
          this.imagesUrl = imagesUrl;
     }

     public Specifications getSpecs() {
          return specs;
     }

     public void setSpecs(Specifications specs) {
          this.specs = specs;
     }
}
