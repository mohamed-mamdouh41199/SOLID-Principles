// This is the third principle of SOLID principles in software design, Liskov Substitution Principle (LSP).
// Liskov Substitution Principle (LSP) :- If a class is a subclass of another class, it should be able to replace the parent class without affecting the functionality of the program.
// In other words, objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.
// This principle helps to ensure that a subclass can be used interchangeably with its parent class, promoting code reusability and flexibility.

/////////// Bad Example of Liskov Substitution Principle (LSP) ////////////
class Bird {
    fly() {
        console.log("Flying");
    }
}
class Penguin extends Bird {
    fly() {
        throw new Error("Penguins can't fly");
    }
}
// usage
function makeBirdFly(bird) {
    bird.fly();
}
// const penguin = new Penguin();
// makeBirdFly(penguin); // This will throw an error because penguins can't fly
console.log("*".repeat(50)); 

////////////// Good Example of Liskov Substitution Principle (LSP) //////////////
class Bird2 {
  walk() {
    console.log("Walking");
  }
}

class FlyingBird extends Bird2 {
  fly() {
    console.log("Flying");
  }
}

class Sparrow extends FlyingBird {}
class Penguin2 extends Bird2 {} // لا تطير، فتورث فقط الخصائص المشتركة

// usage
const sparrow = new Sparrow();
sparrow.fly(); // ✅

const penguin = new Penguin2();
penguin.walk(); // ✅
// This way, we ensure that all subclasses of `Bird2` can be used interchangeably without breaking the functionality of the program.