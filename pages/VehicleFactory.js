import React from 'react';
import Car from '../objects/Car';
import Truck from '../objects/Truck';

class VehicleFactory {
  constructor() {
    this.vehicleClass = Car;
  }

  createVehicle(vehicleType) {
    switch (vehicleType) {
      case "car":
        this.vehicleClass = Car;
        break;
      case "truck":
        this.vehicleClass = Truck;
        break;
    }
    return new this.vehicleClass(vehicleType);
  }
}
const factory = new VehicleFactory();
const createdVehicle = factory.createVehicle('truck');

export default () => <div>The vehicle is a {createdVehicle.name} with {createdVehicle.wheels} wheels</div>
