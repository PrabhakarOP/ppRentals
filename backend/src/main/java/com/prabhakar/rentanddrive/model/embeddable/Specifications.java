package com.prabhakar.rentanddrive.model.embeddable;

public class Specifications {
    private Engine engine;
    private Capacity capacity;
    private Brake brakes;
    private Suspension suspension;
    private String tyres;
    private String turningCircle;
    private Dimension dimension;

    public Engine getEngine() {
        return engine;
    }

    public void setEngine(Engine engine) {
        this.engine = engine;
    }

    public Capacity getCapacity() {
        return capacity;
    }

    public void setCapacity(Capacity capacity) {
        this.capacity = capacity;
    }

    public Brake getBrakes() {
        return brakes;
    }

    public void setBrakes(Brake brakes) {
        this.brakes = brakes;
    }

    public Suspension getSuspension() {
        return suspension;
    }

    public void setSuspension(Suspension suspension) {
        this.suspension = suspension;
    }

    public String getTyres() {
        return tyres;
    }

    public void setTyres(String tyres) {
        this.tyres = tyres;
    }

    public String getTurningCircle() {
        return turningCircle;
    }

    public void setTurningCircle(String turningCircle) {
        this.turningCircle = turningCircle;
    }

    public Dimension getDimension() {
        return dimension;
    }

    public void setDimension(Dimension dimension) {
        this.dimension = dimension;
    }
}
