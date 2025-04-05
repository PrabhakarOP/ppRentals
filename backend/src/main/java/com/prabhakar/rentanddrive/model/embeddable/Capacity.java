package com.prabhakar.rentanddrive.model.embeddable;

import lombok.Data;

@Data
public class Capacity {
    private int seats;
    private String cargoVolume;
    private float fuelTankCapacity;
}
