# Open Close Principle (OCP)

## Objects or entities should be open for extension but closed for modification.

## This means that a class should be extendable without modifying the class itself.

```js
class Book {
    constructor(public title: string, public author: string) {
        this.title = title;
        this.author = author;
    }

    getDetails(format: string) {
        if (format === "Plain") return `${this.title} by ${this.author}`;
        else if (format === "html") return `<p>${this.title} by ${this.author}</p>`;
    }
}
```

## **Issue:**

If we want to integrate another details format (for example, JSON), we would have to modify the `getDetails` function, which violates the OCP principle.

## **Improvement:**

```js
interface Formatter {
    format(book: Book): string;
}

class Book {
    constructor(public title: string, public author: string) {
        this.title = title;
        this.author = author;
    }
}

class PlainFormatter implements Formatter {
    format(book: Book): string {
        return `${book.title} by ${book.author}`;
    }
}

class HTMLFormatter implements Formatter {
    format(book: Book): string {
        return `<p>${book.title} by ${book.author}</p>`;
    }
}

class JSONFormatter implements Formatter {
    format(book: Book): string {
        return JSON.stringify({
            title: book.title,
            author: book.author,
        });
    }
}

const HPBook = new Book("Harry Potter", "J. K. Rowling");
const plainFormatter = new PlainFormatter();
const htmlFormatter = new HTMLFormatter();
const jsonFormatter = new JSONFormatter();

console.log(plainFormatter.format(HPBook));
console.log(htmlFormatter.format(HPBook));
console.log(jsonFormatter.format(HPBook));
```

The existing formatters (PlainTextFormatter and HtmlFormatter) were untouched.
Adding the JSONFormatter extended functionality without modifying existing code.

## **Benifits:**

1. Encourages scalability and reduces the risk of introducing bugs.

Next -> 👉 [Liskov Substitution Principle](/OOP%20Concepts/SOLID_Principles/LSP.md)
