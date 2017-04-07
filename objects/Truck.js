import Vehicle from './Vehicle';

export default class Truck extends Vehicle {
  constructor(customizations) {
    super(customizations);
    this.wheels = 4;
    this.name = 'Truck';
  }
}
