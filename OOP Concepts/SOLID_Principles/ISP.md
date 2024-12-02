# Interface Segregation Principle (ISP)

## A class should not be forced to implement interfaces it does not use.

```js
interface BookOperations {
  read(): void;
  print(): void;
}

class EBook implements BookOperations {
  constructor(public title: string, public author: string) {
    this.title = title;
    this.author = author;
  }
  read(): void {
    console.log("Reading mode");
  }
  print(): void {
    console.log("Cannot print an EBook");
  }
}
```

## **Issue:**

The Ebook class is forced to implement print, which it cannot support.

## **Improvements:**

```js
interface Readable {
  read(): void;
}

interface Printable {
  print(): void;
}

class EBook implements Readable {
  constructor(public title: string, public author: string) {
    this.title = title;
    this.author = author;
  }
  read(): void {
    console.log("Reading mode");
  }
}

class PhysicalBook implements Readable, Printable {
  constructor(public title: string, public author: string) {
    this.title = title;
    this.author = author;
  }

  read(): void {
    console.log("Reading mode");
  }

  print(): void {
    console.log("Printing the book");
  }
}
```

## **Benefits:**

1. Promotes cleaner, more focused interfaces.
2. Reduces the likelihood of unused or unimplementable methods.

Next -> 👉 [Dependency Inversion Principle](/OOP%20Concepts/SOLID_Principles/DIP.md)
