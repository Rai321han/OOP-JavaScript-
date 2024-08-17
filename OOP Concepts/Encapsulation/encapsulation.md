# Encapsulation

In Object Oriented Programming, Encapsulation means bundling data and methods that manipulate them into a single entity (such as class).
It keeps relatable data and method together and also help data hiding.

Let's see in action:

```js
class Vehicle {
  constructor(name, license) {
    this.name = name;
    this.license = license;
  }

  getName() {
    return this.name;
  }

  getLicense() {
    return this.license;
  }

  setName(newName) {
    this.name = newName;
  }

  setLicense(newLicense) {
    this.license = newLicense;
  }
}
```

So we are keeping all relatable data and methods inside a class. Everything is encapsulated into a single entity.
In general, the data members are manipulated by getter and setter methods. <br/>
In our example, `getName`,`getLicense` are getter or read-only method. `setName` and `setLicense` are setter or write-only method.
So this gives us a good pattern for modification. <br/><br/>

We can achieve data hiding using encapsulation using [Access Modifiers](/OOP%20Concepts/Encapsulation/access_modifiers.md).

Next -> [Access Modifiers](/OOP%20Concepts/Encapsulation/access_modifiers.md)
