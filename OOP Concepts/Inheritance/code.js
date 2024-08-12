// Inheritance
// Inheritance in OOP is a way to inherit properties of a class to another.
// The former class is called the base class or parent class and the later class is called the child class
// In JavaScript although we see 'class' syntax, behind the scene everything is done using function and prototype chaining.
// 'class' based syntax are just synthectical sugar you can say. But they improve legibility and programmer from other languages can find these syntax familiar.
// Let's see how inheritance is done in JavaScript!

// First make a general Car class which is going to be a parent class.
// class Car {
//   constructor(name) {
//     this.name = "Car";
//   }
//   start() {
//     console.log(`${this.name} has started`);
//   }
//   stop() {
//     console.log(`${this.name} has stopped`);
//   }
// }

// const car = new Car("Car");
// car.start(); //Car has started
// car.stop(); //Car has stopped

// Here Car.prototype has constructor, start and stop methods.
// car's __proto__ is linked to the Car.prototype

///
// class Ford extends Car {
//   constructor(name) {
//     this.name = name;
//   }
//   selfDrive() {
//     console.log(`${this.name} is in self driving mode`);
//   }
// }

// const ford = new Ford("Ford");
// ford.selfDrive(); // Ford is in self driving mode.
// ford.start(); // Ford has started
// ford.stop(); // Ford has stopped

// In this case ford's __proto__ is set to Ford.prototype
// And Ford.prototype has a __proto__ property, that is set to Car.prototype.
// So even if we have not defined start and stop method in the Ford class, due to 'extends' with the help of prototype chaining
// it finds the start and stop method from Car.prototype.
// So Ford class has inherited the properties of Car class.

// Aggregation

// class SoundSystem {
//   constructor(highestSound) {
//     this.highest = highestSound;
//   }
//   soundOn() {
//     console.log("Sound is on");
//   }

//   soundOff() {
//     console.log("Sound is off");
//   }
// }

// class TV {
//   constructor(highestSound) {
//     this.sound = new SoundSystem(highestSound);
//   }
//   turnOn() {
//     console.log("TV is turned on");
//   }
//   turnOff() {
//     console.log("TV is turned off");
//   }
// }

// const PanasonicTV = new TV(10);
// PanasonicTV.sound.soundOn();

// Multilevel

class Car {
  constructor(name) {
    this.name = name;
  }
  start() {
    console.log(`${this.name} has started`);
  }
  stop() {
    console.log(`${this.name} has stopped`);
  }
}

class ClassicCar extends Car {
  constructor(name) {
    super(name);
    this.name = name;
  }
  highSpeedMode() {
    console.log(`${this.name} enabled highspeed mode.`);
  }
}

class ModernCar extends ClassicCar {
  constructor(name) {
    super(name);
    this.name = name;
  }
  ultraHighSpeedMode() {
    console.log(`${this.name} enabled ultra highspeed mode.`);
  }
}

const vugatti = new ModernCar("Vugatti-M1");
vugatti.start(); //Vugatti-M1 has started
vugatti.highSpeedMode(); //Vugatti-M1 enabled highspeed mode.
vugatti.ultraHighSpeedMode(); //Vugatti-M1 enabled ultra highspeed mode.
vugatti.stop(); //Vugatti-M1 has stopped
