# All About _this_ Keyword

> The value of this in JavaScript depends on how a function is invoked (runtime binding), not how it is defined. When a regular function is invoked as a method of an object (obj.method()), this points to that object. When invoked as a standalone function (not attached to an object: func()), this typically refers to the global object (in non-strict mode) or undefined (in strict mode). The Function.prototype.bind() method can create a function whose this binding doesn't change, and methods apply() and call() can also set the this value for a particular call. - MDN

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

### Callback

Callback are generally called without attaching to any object. In this case, `this` refers to `undefined` (in strict mode) or `globalThis` (in non-strict mode).
For example:

In strict mode

```js
const callBackFunction = function () {
  "use strict";
  console.log(this);
};

const aFunction = function (callback) {
  callback();
};
aFunction(callBackFunction); //undefined
```

In non-strict mode

```js
const callBackFunction = function () {
  console.log(this);
};

const aFunction = function (callback) {
  callback();
};
aFunction(callBackFunction); //globalThis
```

But some API implementation can take input to use as `this` when executing the callback function.
[forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach) is one of them. The syntax for forEach is `forEach(callbackFn, thisArg)`

### Arrow Function

### Constructors

## Class Context