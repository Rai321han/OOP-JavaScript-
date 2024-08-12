# Multilevel Inheritance

In the last topic, we learned one level single inheritance where a child class has one superclass but no grandparent class.
In Multilevel Inheritance, a class can inherit properties from it's parent and also from gradparent and so on.

That means, one level single inheritance refers to `Child Class -> Parent Class` <br/>
Multilevel refers to `Child -> Parent Class -> Grandparent Class -> ...`

**Multilevel Inheritance**

```js
class A {}

class B extends A {}

class C extends B {}
```

Example:

```js
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
```

So, the child class is `ModernCar`, it's parent class is `ClassicCar` and grandparent class is `Car`.
As child class `ModernCar` inherited properties from it's parent and grandparent, child class object can access all the properties existed on parent and grandparent classes.
So it's a two level inheritance.

Next -> [Association](/OOP%20Concepts/Inheritance/Association.md)
