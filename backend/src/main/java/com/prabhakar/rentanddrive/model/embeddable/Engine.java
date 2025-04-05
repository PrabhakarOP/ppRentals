package com.prabhakar.rentanddrive.model.embeddable;

import lombok.Data;

@Data
public class Engine {
    private String type;
    private String displacement;
    private String maxPower;
    private String maxTorque;
}
