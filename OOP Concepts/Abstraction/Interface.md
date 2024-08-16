# Interface

So we have seen abstract class. Abstract class have implemented common methods for subclasses and also abstract method (methods which are expected to be defined by the subclasses). But interface should not have any defined methods, means all methods of interface must be abstract methods. If a class implement an interface, it must define those methods of the interface. This is the difference between Interface and Abstract class.

> [!NOTE]
> Using an Abstract class is called "exteneded" but using interface is called "implemented".
> As JavaScript doesn't have built-in support for interface, we are not going to see "implement" keyword when working with interface.
> TypeScript has built-in interface support!

Now we are going to simulate the idea of Interface using JavaScript.

Let's say we have a `Vehicle` interface. <br/>
This interface has two abstract methods called `start` and `stop`.
So if any class implement this interface, that class should define/override these abstract methods.
If the implementing class doesn't override the abstract methods of Interface, program will throw error.
This is the general rule of Interface.

```js
class Vehicle {
  constructor(type) {
    // Instance of an interface should not be created
    if (this.constructor === Vehicle)
      throw new Error("Cannot create instance of Interface.");

    // here start is our abstract method which is not implemented in the interface, so it is called abstract method.
    if (this.start === undefined)
      throw new Error("Must override method 'start'.");
    if (this.stop === undefined)
      throw new Error("Must override method 'stop'.");

    // Interface can have variable/properties common for reusing.
    this.type = type;
  }
}

class Bike extends Vehicle {
  constructor(type) {
    super(type);
  }

const bike = new Bike("Bike"); // Error: Must override method 'start'
```

As we can see, if we don't override the methods comming from the Interface, we will get error, saying us to override those methods.
<br/>
After overriding those methods:

```js
class Bike extends Vehicle {
  constructor(type) {
    super(type);
  }

  start() {
    console.log(`${this.type} has started`);
  }

  stop() {
    console.log(`${this.type} has stopped`);
  }
}

const bike = new Bike("Bike"); // Instance of Bike created
bike.start(); // Bike has started
bike.stop(); // Bike has stopped
```

> [!WARNING]
> As we said earlier, JS doesn't have built-in support for Interface. Here, we are just simulating the idea.
> You can see that we haven't actually declared those abstract methods (`start` & `stop`) inside the our so called Interface class.
> We are just checking if `this.start` and `this.stop` is defined or not. <br/>
> The autocomplete or snippet cannot understand that those are abstract methods.
> So, IDE cannot help us to know which methods we need to override if we don't know the actual implementation of the Interface.
> If you want to learn more about Interface, pick other OOP language like C++, Java etc.
