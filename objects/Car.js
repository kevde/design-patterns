import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  constructor(customizations) {
    super(customizations);
    this.wheels = 4;
    this.name = 'Car';
  }
}
