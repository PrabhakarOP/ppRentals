package com.prabhakar.rentanddrive.model.embeddable;

import lombok.Data;

@Data
public class Dimension {
    private double length;
    private double width;
    private double height;
    private double wheelBase;
    private double frontTread;
    private double rearTread;
}
