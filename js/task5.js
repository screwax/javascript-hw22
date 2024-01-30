class Car {
    constructor({ maxSpeed, price }) {
      this.speed = 0;
      this.price = price;
      this.maxSpeed = maxSpeed;
      this.isOn = false;
      this.distance = 0;
    }

    static getSpecs(car) {
      console.log(`
        maxSpeed: ${car.maxSpeed},
        speed: ${car.speed},
        isOn: ${car.isOn},
        distance: ${car.distance},
        price: ${car.price}
      `);
    }

    get price() {
      return this._price;
    }

    set price(value) {
      this._price = value;
    }

    turnOn() {
      this.isOn = true;
    }

    turnOff() {
      this.isOn = false;
      this.speed = 0;
    }

    accelerate(value) {
      if (this.speed + value <= this.maxSpeed) {
        this.speed += value;
      }
    }

    decelerate(value) {
      if (this.speed - value >= 0) {
        this.speed -= value;
      }
    }

    drive(hours) {
      if (this.isOn) {
        this.distance += hours * this.speed;
      }
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
Car.getSpecs(mustang);


mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
Car.getSpecs(mustang);

console.log(mustang.price); 
mustang.price = 4000;
console.log(mustang.price); 