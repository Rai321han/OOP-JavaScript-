# Liskov Substitution Principle

## Subtypes should be replaceable with their base types without altering the program's behavior.

```js
class Book {
  constructor(public title: string, public author: string) {
    this.title = title;
    this.author = author;
  }
}

class EBook extends Book {
  constructor(title: string, author: string) {
    super(title, author);
  }

  getDetails() {
    return `${this.title} by ${this.author}`;
  }
}
```

## **Issue**

Ebook breaks the contract of the Book class since it cannot support getDetails.

## **Improvement**

```js
abstract class Book {
  constructor(public title: string, public author: string) {
    this.title = title;
    this.author = author;
  }
  abstract getDetails(): string;
}

class EBook extends Book {
  constructor(title: string, author: string) {
    super(title, author);
  }

  getDetails() {
    return `E-BOOK: ${this.title} by ${this.author}`;
  }
}

class PhysicalBook extends Book {
  constructor(title: string, author: string) {
    super(title, author);
  }

  getDetails() {
    return `PHYSICAL BOOK: ${this.title} by ${this.author}`;
  }
}

function printBookDetails(book: Book): void {
  console.log(book.getDetails());
  return;
}

const EBookHP = new EBook("Harry potter", "J. K. Rowling");
const PhysicalBookHP = new PhysicalBook("Harry potter", "J. K. Rowling");
printBookDetails(EBookHP);
printBookDetails(PhysicalBookHP);
```

## **Benifits**

1. Ensures consistent behavior across different subtypes.
2. Makes the code more predictable and robust.

Next -> 👉 [Interface Segregation Principle](/OOP%20Concepts/SOLID_Principles/ISP.md)
