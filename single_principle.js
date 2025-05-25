// This is the first principle of the SOLID principles.
// Single Responsibility Principle (SRP) :- Is a class should have only one reason to change, and it should only have one job.

/////////// Bad Example of Single Responsibility Principle (SRP) ////////////
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    saveToDatabase() {
        // Logic to save user to database
        console.log(`Saving ${this.name} to database.`);
    }

    sendEmail() {
        // Logic to send email
        console.log(`Sending email to ${this.email}.`);
    }
}
// usage
// const user = new User('Mohamed Mamdouh', 'mohamed@gmail.com'); 
// console.log(`User Name: ${user.getName()}`);
// console.log(`User Email: ${user.getEmail()}`);
// user.saveToDatabase(); 
// user.sendEmail();

////////////// Example of Single Responsibility Principle (SRP) //////////////
class User2 {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }
}
class UserRepository {
    save(user) {
        // Logic to save user to database
        console.log(`Saving ${user.getName()} to database.`);
    }
}
class EmailService {
    sendEmail(user) {
        // Logic to send email
        console.log(`Sending email to ${user.getEmail()}.`);
    }
}
// usage
const user = new User2('Mohamed Mamdouh', 'mohamed@gmail.com');
const userRepository = new UserRepository();
const emailService = new EmailService();
console.log(`User Name: ${user.getName()}`);
console.log(`User Email: ${user.getEmail()}`);
userRepository.save(user);
emailService.sendEmail(user);