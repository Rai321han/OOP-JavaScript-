# Single Responsibility Principle (SRP)

## A class should have one and only one reason to change, meaning that a class should have only one job.

```js
class Book {
  constructor(public title: string, public author: string) {}

  saveToDatabase() {
    console.log(`Saving "${this.title}" to the database.`);
  }

  printDetails() {
    console.log(`Book: ${this.title} by ${this.author}`);
  }
}
```

## **Issue:**

The `Book` class handles two responsibilities: data representation and database operations.
To address this issue, we can create separate class for database operation and displaying book details.

## **Improvement**

```js
class Book {
  constructor(public title: string, public author: string) {
    this.title = title;
    this.author = author;
  }
}

class BookDatabase {
  save(book: Book) {
    console.log(`Saving "${book.title}" to the database.`);
  }
}

class BookPrinter {
  print(book: Book) {
    console.log(`Book: ${book.title} by ${book.author}`);
  }
}

const bookDatabase = new BookDatabase();
const bookPrinter = new BookPrinter();
const HPBook = new Book("Harry Potter", "J. K. Rowling");
bookDatabase.save(HPBook);
bookPrinter.print(HPBook);
```

## **Benefits**:

1. Easier maintenance since each class has a specific responsibility.
2. Changes in one functionality don't impact others.

Next -> 👉 [Open Close Principle](/OOP%20Concepts/SOLID_Principles/OCP.md)
