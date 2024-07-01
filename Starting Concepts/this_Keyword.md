# All About _this_ Keyword

_The value of this in JavaScript depends on how a function is invoked (runtime binding), not how it is defined. When a regular function is invoked as a method of an object (obj.method()), this points to that object. When invoked as a standalone function (not attached to an object: func()), this typically refers to the global object (in non-strict mode) or undefined (in strict mode). The Function.prototype.bind() method can create a function whose this binding doesn't change, and methods apply() and call() can also set the this value for a particular call._ - MDN

Okay. That's a lot to take.

We are going to see all of this use cases.

The value of `this` depends on in which context it appears: function, class, or global.

## Function Context

Inside of function `this` depends on how the function is invoked. When a object accessed a function with dot notaion such as `object.function_name()`, then `this` refers to the `object`. For example:

```js
const user1 = {
  name: "Raihan",
  returnThis() {
    return this;
  },
};
console.log(user1.returnThis()); //{name: 'Raihan', returnThis: ƒ} or simply user1 object
```

Let's see another example:

```js
const user1 = {
  name: "Raihan",
  returnThis() {
    return this;
  },
};

const user2 = {
  name: "Username",
  returnThis: user1.returnThis,
};
console.log(user2.returnThis()); //{name: 'Username', returnThis: ƒ} or simply user2
```
