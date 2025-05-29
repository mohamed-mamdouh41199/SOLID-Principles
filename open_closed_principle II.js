// This is an example 2 of the Open/Closed Principle in JavaScript

// bad example of Open/Closed Principle (OCP)
function notify(type, message) {
  if (type === "email") {
    console.log(`Sending email: ${message}`);
  } else if (type === "sms") {
    console.log(`Sending SMS: ${message}`);
  } else if (type === "push") {
    console.log(`Sending push notification: ${message}`);
  } else {
    // throw new Error("Unknown notification type");
  }
}
// usage
notify("email", "Hello via Email");
notify("sms", "Hello via SMS");
notify("push", "Hello via Push Notification");
notify("unknown", "This will throw an error");
console.log("*".repeat(50));

// good example of Open/Closed Principle (OCP)
class Notification {
  send(message) {
    throw new Error("Method not implemented");
  }
}
class EmailNotification extends Notification {
  send(message) {
    // This method is overridden in the subclass
    // to provide specific implementation for sending email
    console.log(`Sending email: ${message}`);
  }
}
class SMSNotification extends Notification {
  send(message) {
    // This method is overridden in the subclass
    // to provide specific implementation for sending SMS
    console.log(`Sending SMS: ${message}`);
  }
}
class PushNotification extends Notification {
  send(message) {
    // This method is overridden in the subclass
    // to provide specific implementation for sending push notification
    console.log(`Sending push notification: ${message}`);
  }
}
class AppNotification extends Notification {
  constructor(emailAddress) {
    super(); // لازم تستدعيها بس من غير باراميتر
    this.emailAddress = emailAddress;
    console.log(`Email address set to: ${this.emailAddress}`);
  }

  send(message) {
    console.log(`Sending app notification to ${this.emailAddress}: ${message}`);
  }
}
// usage
function notify2(notification) {
  notification.send("Hello via " + notification.constructor.name);
}
// usage
const emailNotification = new EmailNotification();
const appNotification = new AppNotification("app", "mohamed@gmail.com:");
const smsNotification = new SMSNotification();
const pushNotification = new PushNotification();
notify2(emailNotification);
notify2(smsNotification);
notify2(pushNotification);
notify2(appNotification);
console.log("*".repeat(50));
// This way, we can add new notification types without modifying the existing code.
// For example, if we want to add a new notification type, we can simply create a new class that extends the `Notification` class and implement the `send` method.
