# Dependency Inversion Principle

## High-level modules should not depend on low-level modules; both should depend on abstractions.

```js
class EmailService {
    sendEmail(message: string) {
        console.log(`Sending email: ${message}`);
    }
}

class BookNotifier {
    private emailService = new EmailService(); // Tight coupling

    notify(bookTitle: string) {
        this.emailService.sendEmail(
        `A new book titled "${bookTitle}" is available!`
        );
    }
}

// Usage
const notifier = new BookNotifier();
notifier.notify("The Pragmatic Programmer");
```

## **Issue:**

The BookNotifier class is tightly coupled to EmailService.
Changing the notification method (e.g., adding SMS or push notifications) requires modifying BookNotifier

```js
// Abstraction for notification services
interface NotificationService {
    send(message: string): void;
}

// Email implementation of NotificationService
class EmailService implements NotificationService {
    send(message: string): void {
        console.log(`Sending email: ${message}`);
    }
}

// SMS implementation of NotificationService
class SMSService implements NotificationService {
    send(message: string): void {
        console.log(`Sending SMS: ${message}`);
    }
}

// Push notification implementation
class PushNotificationService implements NotificationService {
    send(message: string): void {
        console.log(`Sending push notification: ${message}`);
    }
}

// High-level module depending on abstraction
class BookNotifier {
constructor(private notificationService: NotificationService) {}

notify(bookTitle: string) {
        this.notificationService.send(
        `A new book titled "${bookTitle}" is available!`
        );
    }
}

// Usage
const emailNotifier = new BookNotifier(new EmailService());
emailNotifier.notify("Clean Architecture"); // Sending email: A new book titled "Clean Architecture" is available!

const smsNotifier = new BookNotifier(new SMSService());
smsNotifier.notify("The Pragmatic Programmer"); // Sending SMS: A new book titled "The Pragmatic Programmer" is available!

const pushNotifier = new BookNotifier(new PushNotificationService());
pushNotifier.notify("Refactoring"); // Sending push notification: A new book titled "Refactoring" is available!
```

## **Benefits:**

1. Increases flexibility by decoupling high-level and low-level modules.
2. Makes it easier to replace or modify dependencies.
