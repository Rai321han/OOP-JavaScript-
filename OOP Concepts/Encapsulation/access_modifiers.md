# Access Modifiers

Delimiting internal interface from the external one is important in
object oriented programming. In complex program, we may need to set boundaries or limit of accessing data or method.
In OOP, Access modifiers are used to set the accessibility of the class members. Everything should not be public, right?

## Types of Access Modifiers

In general, there are three type of access modifiers in OOP language:
<br/>

1. Public
   This is default access modifier. It means that the class members can be accessible from anywhere.

2. Protected:
   It means that the class members are accessible from the class itself and its subclasses

3. Private
   It means that the class members are accessible only from the class.

> [!CAUTION]
> We know JavaScript is not a true OOP language and initially private and protected access modifiers were not introduced.
> ES6 introduced Private modifier.
> Still Protected access modifier is not available.

### Access Modifier: _Public_

By default, methods and data members are public. That means:

- They are accessible from the outside of the class.
- They can manipulated outside of the class.
- Less or almost no control over data and methods.

```js
class Vehicle {
  constructor(type, serialNo) {
    this.type = type;
    this.serialNo = serialNo;
  }

  getType() {
    return this.type;
  }

  getSerialNo() {
    return this.serialNo;
  }
}

const car = new Vehicle("Car");

car.type = "bike";
console.log(car.type); //bike

// Modifying the class method. Which is definitely not good.
car.getType = () => {
  return "This method is modified";
};
console.log(car.getType()); // This method is modified
```

So, you can see that everything is accessible outside the class and can be modified publicly.
There is no hiding at all. <br/>

### Access Modifier: _Private_

Unline public property, private properties are only accessible inside the class where they are defined.
Private properties are created using `#` (# names). <br/>
Private properties are only accessible using dor (.) notation and obviously inside the class.

```js
class Vehicle {
  #type;
  #serialNo;

  constructor(type, serialNo) {
    this.#type = type;
    this.#serialNo = serialNo;
  }

  setType(newType) {
    this.#type = newType;
  }

  setSerialNo(newSerialNo) {
    this.#type = newSerialNo;
  }

  getType() {
    return this.#type;
  }

  getSerialNo() {
    return this.#serialNo;
  }
}

const car = new Vehicle("Car");
console.log(car.getType()); // Car
car.#type = "bike"; // Property '#type' is not accessible outside class 'Vehicle' because it has a private identifier.
```

So `car.#type` cannot be accessible outside of the class. We can only interact with this property using public method (such as `getType()`).

#### Private field must be declared in the class body

```js
class Vehicle {
  //we haven't declared the private field here
  constructor(type, serialNo) {
    this.#type = type;
    this.#serialNo = serialNo;
  }
}

const car = new Vehicle("Car"); // Private fields must be declared in an enclosing class
```

So we must declared the private field in the class body

```js
class Vehicle {
   #type,
   #serialNo
  constructor(type, serialNo) {
    this.#type = type;
    this.#serialNo = serialNo;
  }
}

const car = new Vehicle("Car"); // no error
```

#### We cannot delete a private property which is declared

```js
class Vehicle {
  #type;
  #serialNo;

  constructor(type) {
    this.#type = type;
    delete this.#serialNo
  }
}

const car = new Vehicle("Car") // Syntaxerror: Private fields can not be deleted
```

#### Private fields in Inheritance

In the base class, private fields are added before the constructor and in the derived class private field, immediately after invoking the `super()`.
Also, Private field from base class cannot be inherited to the derived class.

```js
class Vehicle {
  #type;
  constructor(type) {
    this.#type = type;
  }
}

class Car extends Vehicle {
  #model;
  constructor(model) {
    super();
    this.#model = model;
  }

  getModel() {
    return this.#model;
  }

  getType() {
    return this.#type;
  }
}

const car = new Car("Bugatti");
console.log(car.getModel()); // Bugtti
console.log(car.getType()); // #type cannot be accesible inside the derived class, even in inheritance
```

Actually if we define the private field of the subclass before invoking `super()`, `this` will be undefined. So we will get error.

#### Private static fields

Private static fields are only accessible on the class itself.

```js
class Vehicle {
  #type;
  static #maxNumber = 40;
  constructor(type) {
    this.#type = type;
  }

  static getMaxNumber() {
    return this.#maxNumber;
  }
}

class Car extends Vehicle {
  #model;
  constructor(model) {
    super();
    this.#model = model;
  }

  getModel() {
    return this.#model;
  }
}

const car = new Car("Bugatti");
console.log(Car.getMaxNumber()); // Cannot read private member #maxNumber
// from an object whose class did not declare it
```

Even if we invoke `super.getMaxNumber()`, still we will get error, because `this` will not refer to the base class.

#### Private Instance Methods

- Private instance methods are only accessible by the instance of the class.
- They are not available on the instance's `.prototype` property.

```js
class Vehicle {
  #maxNumber;
  constructor(type, maxNumber) {
    this.type = type;
    this.#maxNumber = maxNumber;
  }

  #getMaxNumber() {
    return this.#maxNumber;
  }

  publicGetMaxNumber() {
    return this.#getMaxNumber();
  }
}

const car = new Vehicle("Bugatti", 20);
console.log(car.publicGetMaxNumber()); // 20
console.log(Vehicle.prototype); // {publicGetMaxNumber: ƒ}
```

#### Private Static Method

- Private static method are only available on the class itself.
- Subclass cannot access base class static private method

```js
class Vehicle {
  #type;
  static #maxNumber = 40;
  constructor(type) {
    this.#type = type;
  }

  static #getMaxNumber() {
    return this.#maxNumber;
  }

  static publicGetMaxNumber() {
    return this.#getMaxNumber();
  }
}

class Car extends Vehicle {
  constructor() {
    super();
  }
}

const car = new Car("Bugatti");
console.log(Vehicle.publicGetMaxNumber()); // 40
console.log(Car.publicGetMaxNumber()); // TypeError: Cannot read private member #getMaxNumber from an object whose class did not declare it
```

### Access Modifier _Protected_

- Protected modifier is not implemented in language level.
- It is a convention JS programmers follows.
- Protected fields are indicated with `_` (underscore).
- Protected fields should not be accessible outside the class.
- They can be accessible to derived class.

```js
class Vehicle {
  constructor(type) {
    this._type = type;
  }

  getType() {
    return this._type;
  }
}

class Car extends Vehicle {
  constructor(type) {
    super(type);
  }
}

const car = new Car("Car");
console.log(car.getType()); // Car
```

We can implement getter method using `get` prefix, like `get Type()`.
Then we can access the property using `car.Type`.
This way we can prevent setting the `_type` property outside the class unintentionally.

```js
class Vehicle {
  constructor(type) {
    this._type = type;
  }

  get Type() {
    return this._type;
  }
}

class Car extends Vehicle {
  constructor(type) {
    super(type);
  }
}

const car = new Car("Car");
console.log(car.Type); // Car
car.Type = "Bike";
console.log(car.Type); // Car
```
