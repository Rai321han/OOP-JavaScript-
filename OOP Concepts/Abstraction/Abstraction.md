# Abstraction

Abstraction in OOP means hidding the complex implementation details and showing only the required implementation.

Points to remember:

1. We cannot create instance of an abstract class
2. It reduces duplicaiton of code

> [!NOTE]
> JavaScript doesn't have built-in abstraction support like other OOP language. (for example, c++ has "abstract" keyword)
> But we can simulate the approach of an abstract class to achieve abstraction in JavaScript.
> TypeScript has abstraction support.

Abstraction reduces code duplication by encapsulating common functionality in a single place, allowing it to be reused across different parts of a program.

Let's see an example of code duplication:

```js
class Car {
  calculateFuelEfficiency() {
    // Some complex logic for calculating fuel efficiency
    return "Car fuel efficiency calculated.";
  }
}

class Bike {
  calculateFuelEfficiency() {
    // Some complex logic for calculating fuel efficiency
    return "Bike fuel efficiency calculated.";
  }
}
```

We would have to write the same complex function (`calculateFuelEfficiency`) for both classes.
But using a abstract class with common functionalities, we can reduce duplicaiton of code. Let's see that again.

```js
class Vehicle {
  calculateFuelEfficiency() {
    // Common logic for calculating fuel efficiency
    return "Fuel efficiency calculated.";
  }
}

class Car extends Vehicle {
  // Car-specific logic can be added here
}

class Bike extends Vehicle {
  // Bike-specific logic can be added here
}
```

So, now we have an abstract class called `Vehicle`, which hold the common function. Then the `Car` and `Bike` class can extend this `Vehicle` class to inherit the functionalities.

So, it's like inheritance, right?
But there is more to it. <br/>
Abstract class may have incomplete function implementation, which is expected to be defined by the subclass.
It is like abstract class are designed to be extended, not iniitiated,ensuring that subclass provide necessary implementation.

## Instance of Abstract class cannot be created

Let's say we have a abstract class `Vehicle` and the `Bike` class extend this class.
To simulate the abstraction rule in JS, we can throw an error in case of creating an instance of abstract class.

```js
class Vehicle {
  constructor(type) {
    this.type = type;
    if (this.constructor === Vehicle)
      throw new Error("Cannot create instance of abstract class.");
  }
}

class Bike extends Vehicle {
  constructor(type) {
    super(type); // calling super constructor
  }
}

const vehicle = new Vehicle("Bike"); // ERROR: Cannot create instance of abstract class
const bike = new Bike("Bike"); // Instance created
```

That works!

## Keep the common methods inside the abstract class.

Now we are going to define the methods inside the abstract class which are common for the subclass. This way we can reduce the code duplication.

```js
class Vehicle {
  constructor(type) {
    this.type = type;
    if (this.constructor === Vehicle)
      throw new Error("Cannot create instance of abstract class.");
  }

  // Common blueprint methods
  calculateFuelEfficiency() {
    // complex implementation here
    console.log("Fuel Efficiency: 90%");
  }
}

class Bike extends Vehicle {
  constructor(type) {
    super(type); // calling super constructor
  }
  gearUp() {
    console.log("Gear Up");
  }
  gearDown() {
    console.log("Gear Down");
  }
}

const bike = new Bike("Bike"); // Instance of Bike created
bike.calculateFuelEfficiency(); // Fuel Efficiency: 90%
```

## Incomplete methods can be declared in abstract which are expected to be defined by the subclass.

```js
class Vehicle {
  constructor(type) {
    this.type = type;
    if (this.constructor === Vehicle)
      throw new Error("Cannot create instance of abstract class.");
  }

  // Incomplete implementation of method. Expected to implemented by the subclass
  turnOnHeadlights() {
    throw new Error("This method should be defined in subclass");
  }

  // Common blueprint methods
  calculateFuelEfficiency() {
    // complex implementation here
    console.log("Fuel Efficiency: 90%");
  }
}

class Bike extends Vehicle {
  constructor(type) {
    super(type); // calling super constructor
  }
  gearUp() {
    console.log("Gear Up");
  }
  gearDown() {
    console.log("Gear Down");
  }
}

const bike = new Bike("Bike"); // Instance of Bike created
bike.calculateFuelEfficiency(); // Fuel Efficiency: 90%
bike.gearUp(); // Gear Up
bike.turnOnHeadlights(); // Error: This method should be defined in subclass
```

Now if we implement the `turnOnHeadLights` method inside the `Bike` class, it will work.

```js
class Bike extends Vehicle {
  constructor(type) {
    super(type); // calling super constructor
  }

  turnOnHeadLights() {
    console.log("Headlights: On");
  }

  gearUp() {
    console.log("Gear Up");
  }
  gearDown() {
    console.log("Gear Down");
  }
}

const bike = new Bike("Bike"); // Instance of Bike created
bike.calculateFuelEfficiency(); // Fuel Efficiency: 90%
bike.gearUp(); // Gear Up
bike.turnOnHeadlights(); // Headlights: On
```

### Let's see an complete use case:

Let's create a real-world example using the scenario of imaginary KFC and its branches. <br/>
We'll use an abstract class to represent the main KFC's fixed recipe style, and concrete classes to represent the different branches with their unique delivery styles.

```js
// Abstract class representing the main KFC
class KFC {
  constructor(branchName) {
    if (this.constructor === KFC) {
      throw new Error("Cannot instantiate abstract class KFC directly.");
    }
    this.branchName = branchName;
  }

  // Common method for all branches, representing the specific recipe style
  prepareRecipe() {
    console.log(
      `Preparing food using the secret KFC recipe at ${this.branchName} branch.`
    );
  }

  // Abstract method for food delivery, to be implemented by each branch
  deliverFood() {
    throw new Error(
      "Abstract method 'deliverFood' must be implemented by subclass."
    );
  }
}
```

Each branch will extend the main KFC class and implement its own delivery style.

```js
// Urban branch of KFC with its own delivery style
class UrbanKFC extends KFC {
  constructor(branchName) {
    super(branchName);
  }

  // Implement the delivery style for the urban branch
  deliverFood() {
    console.log(`Delivering food by bike at ${this.branchName} branch.`);
  }
}
```

```js
// Suburban branch of KFC with its own delivery style
class SuburbanKFC extends KFC {
  constructor(branchName) {
    super(branchName);
  }

  // Implement the delivery style for the suburban branch
  deliverFood() {
    console.log(`Delivering food by car at ${this.branchName} branch.`);
  }
}
```

Using the classes:

```js
// Create instances of different KFC branches
const urbanKFC = new UrbanKFC("Urban KFC");
const suburbanKFC = new SuburbanKFC("Suburban KFC");
```

Using the methods:

```js
// Use the methods
urbanKFC.prepareRecipe(); // Preparing food using the secret KFC recipe at Urban KFC branch.
urbanKFC.deliverFood(); // Delivering food by bike at Urban KFC branch.

suburbanKFC.prepareRecipe(); // Preparing food using the secret KFC recipe at Suburban KFC branch.
suburbanKFC.deliverFood(); // Delivering food by car at Suburban KFC branch.
```

Next -> [Interface](/OOP%20Concepts/Abstraction/Interface.md)
