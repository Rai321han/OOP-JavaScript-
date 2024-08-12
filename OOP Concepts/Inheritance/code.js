// Inheritance
// Inheritance in OOP is a way to inherit properties of a class to another.
// The former class is called the base class or parent class and the later class is called the child class
// In JavaScript although we see 'class' syntax, behind the scene everything is done using function and prototype chaining.
// 'class' based syntax are just synthectical sugar you can say. But they improve legibility and programmer from other languages can find these syntax familiar.
// Let's see how inheritance is done in JavaScript!

// First make a general Car class which is going to be a parent class.
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

const car = new Car("Car");
car.start(); //Car has started
car.stop(); //Car has stopped

// Here Car.prototype has constructor, start and stop methods.
// car's __proto__ is linked to the Car.prototype

///
class Ford extends Car {
  selfDrive() {
    console.log(`${this.name} is in self driving mode`);
  }
}

const ford = new Ford("Ford");
ford.selfDrive(); // Ford is in self driving mode.
ford.start(); // Ford has started
ford.stop(); // Ford has stopped

// In this case ford's __proto__ is set to Ford.prototype
// And Ford.prototype has a __proto__ property, that is set to Car.prototype.
// So even if we have not defined start and stop method in the Ford class, due to 'extends' with the help of prototype chaining
// it finds the start and stop method from Car.prototype.
// So Ford class has inherited the properties of Car class.
