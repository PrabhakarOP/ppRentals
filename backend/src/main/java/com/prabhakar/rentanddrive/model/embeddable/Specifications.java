package com.prabhakar.rentanddrive.model.embeddable;

import lombok.Data;

@Data
public class Specifications {
    private Engine engine;
    private Capacity capacity;
    private Brake brakes;
    private Suspension suspension;
    private String tyres;
    private String turningCircle;
    private Dimension dimension;
}
