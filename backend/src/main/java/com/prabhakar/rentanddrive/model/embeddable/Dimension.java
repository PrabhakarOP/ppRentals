package com.prabhakar.rentanddrive.model.embeddable;

public class Dimension {
    private double length;
    private double width;
    private double height;
    private double wheelBase;
    private double frontTread;
    private double rearTread;

    public double getLength() {
        return length;
    }

    public void setLength(double length) {
        this.length = length;
    }

    public double getWidth() {
        return width;
    }

    public void setWidth(double width) {
        this.width = width;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public double getWheelBase() {
        return wheelBase;
    }

    public void setWheelBase(double wheelBase) {
        this.wheelBase = wheelBase;
    }

    public double getFrontTread() {
        return frontTread;
    }

    public void setFrontTread(double frontTread) {
        this.frontTread = frontTread;
    }

    public double getRearTread() {
        return rearTread;
    }

    public void setRearTread(double rearTread) {
        this.rearTread = rearTread;
    }
}
