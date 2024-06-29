# JS Prototype Chaining

Let's say we have to create user with user's name and id. Also we need a function to display the user information.

Here's how we can create users:

```js
function userCreate(name, id) {
  // Create a new user object
  const newUser = {};

  // Set properties of the new user object
  newUser.name = name;
  newUser.id = id;

  // Attach the display function to the new user object
  newUser.display = function () {
    console.log(`Name: ${this.name}. ID: ${this.id}`);
  };

  // Return the new user object
  return newUser;
}
```

We can now create new user calling ```userCreate``` function and display the information invoking the display function on the user instance.

```js
const user1 = userCreate("Raihan", 1911023);
console.log(user1);
user1.display();
```

Output:

```
{name: 'Raihan', id: 1911023, display: ƒ}
- id: 1911023
- name: "Raihan"
- display: function () { ... }
```

In this approach, each user object has its own copy of the ```display``` function. This leads to inefficient memory usage, especially when creating many user objects.

## Creating Users with `Object.create()`

To address the memory inefficiency, we use ```Object.create()```. This method creates a new object with a specified prototype object, which allows all users to share the same methods defined in the ***prototype***, thus saving memory.```Object.create()``` create new object using existing object passed as an argument or we can pass null in the argument

### Prototype Object: `showInformation`

```js
const showInformation = {
  display: function () {
    console.log(`Name: ${this.name}. ID: ${this.id}`);
  },
};
```

We will talk about this keyword later. For now, just know that this refers to the object that calls this function.

Let’s create a funciton called ```userCreate``` to create new user with a user’s ```name``` and ```id```.

```js
function userCreate(name, id) {
  // Create a new user object with showInformation as its prototype
  const newUser = Object.create(showInformation);

  // Set properties of the new user object
  newUser.name = name;
  newUser.id = id;

  // Return the new user object
  return newUser;
}
```

As we passed ```showInformation``` as argument to ```Object.create()``` function. The returned object that is, ```newUser``` will have a property which is a object, called ```[[prototype]]```.
And ```display``` function will be a method of that object.
```[[prototype]]``` object looks like:

```js
[[prototype]] : {
                    display: function(){...}
                    ...
                }
```

using access method of object called ```__proto__```, we can get the ```[[prototype]]``` object

```js
const user1 = userCreate("Raihan", 1911023);
console.log(user1);
user1.display();
```

Output:

```
{name: 'Raihan', id: 1911023}
- id: 1911023
- name: "Raihan"
- [[Prototype]]: Object
    - display: ƒ ()
    + [[Prototype]]: Object
```

### Prototype Chain in Action

When we call ```user1.display()```, the JavaScript engine performs the following steps:

1. It first looks for the `display` method on `user1` itself.
2. If it doesn't find `display` on `user1`, it checks the `[[Prototype]]` property of `user1`, which points to `showInformation`.
3. It finds the `display` method in the `showInformation` object and executes it.

### Inspecting the Prototype

You can view the prototype object using the `__proto__` property or the `Object.getPrototypeOf()` method:

```js
console.log(user1.__proto__);
// or
console.log(Object.getPrototypeOf(user1));

// Output
// {display: ƒ}
```

By using `Object.create()`, we efficiently share methods across multiple objects, reducing memory usage and enhancing performance. This demonstrates the power and efficiency of prototype chaining in JavaScript.
