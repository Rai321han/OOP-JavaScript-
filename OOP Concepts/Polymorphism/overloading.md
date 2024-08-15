# Method Overloading

Method Overloading means two or more methods in a class with the same name but different number of parameters.
Here is a simple way to show method overloading. If we call `sum` with two arguments, method 1 should be invoked. Like that, if we call `sum` with three arguments, then method 2 should be invoked.

```js
class Math {
    sum(a,b) {  //method 1
        /...
    }

    sum(a,b,c) { // method 2
        /...
    }

    sum(a,b,c,d) { // method 3
        /...
    }
}
```

Unlike other object oriented programming language, _JavaScript doesn't support method Overloading_ 🙂.
Because if we define two or more function with the same name in JS, then the method that is defined at last will override the previous functions. So there will be only one function with an unique name.
<br/>
_STILL WE CAN ACHIEVE METHOD OVERLOADING USING ANOTHER APPROACH!_

## A way to achieve method overloading in JS

We can get the number of arguments passed to function using `argument.length`.
Depending on the number of arguments, we can define different implementation of a single function. This way we can somehow achieve method overloading (not actually overloading)

Let's see how we can sum different number of value using a function named `sum` of a class `MathFn`.

```js
class MathFn {
  sum(...inputs) {
    switch (
      arguments.length // or we can use "inputs.length"
    ) {
      case 2: {
        const [a, b] = inputs;
        return a + b;
      }
      case 3: {
        const [a, b, c] = inputs;
        return a + b + c;
      }
      case 4: {
        const [a, b, c, d] = inputs;
        return a + b + c + d;
      }
    }
  }
}

const math = new MathFn();
console.log(math.sum(3, 4)); // 7
console.log(math.sum(3, 4, 3)); // 10
console.log(math.sum(1, 4, 3, 5)); // 13
```

See, `sum` function is running with different number of arguments as like we defined multiple `sum` function in our class. <br/>
But the point to remember is that we cannot define multiple function with the same name to achieve method overloading in JavaScript.

Next -> [Compile-time vs Runtime Polymorphism](/OOP%20Concepts/Polymorphism/compile_vs_runtime_polymorphism.md)
