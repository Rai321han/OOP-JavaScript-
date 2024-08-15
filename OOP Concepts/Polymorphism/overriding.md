# Method Overriding

To understand Polymorphism, we need to understand method overriding.

Method overrides when the same method is defined in subclass/child class which is declared in the parent/super class.

```js
class Parent {
    foo() {
        /...
    }
}

class Child extends Parent {
    foo() {
        /...
    }
}
```

And if we invoke the the function `foo` using the `Child` class instance, Child's method will be invoke not the Parent's.

Let's see some examples:

```js
class Car {
  openDoor() {
    console.log("The door has opened.");
  }
}

class ModernCar extends Car {
  openDoor() {
    console.log("Air is flowing nicely!");
  }
}

const modernCar = new ModernCar();
modernCar.openDoor(); // Air is flowing nicely!
```

The method `openDoor` exists in both `Car` and `ModernCar` class. But calling `opendoor` method using the `ModernCar` instance, only invoking from the child class.
So, this way, we can provide our own implementation of the same method that is also defined in the parent class. This gives us flexibility.

But that doesn't mean we cannot reuse the parent's method. Yes, we can do that too using `super` keyword.
Let's see another example:

```js
class Car {
  openDoor() {
    console.log("The door has opened.");
  }
}

class ModernCar extends Car {
  openDoor() {
    super.openDoor();
    console.log("Air is flowing nicely!");
  }
}

const modernCar = new ModernCar();
modernCar.openDoor();
// The door has opened.
// Air is flowing nicely!
```

`super.openDoor()` will invoke the `openDoor` method from the parent class inside the child's `openDoor` method.
This way, we can reuse the implementation of the parent method and also extend the method with our own implementation.

## So why do we need method overriding?

_1. Extensibility and Reusability_ : We can reuse the code from the parent or super class method and even extend the inherited functionality.
_2. Flexibility_ : By allowing us to provide our own implementation in the subclass, method overriding improves flexibility.
