// This is the second principle of SOLID, the Open/Closed Principle (OCP).
// Open/Closed Principle (OCP) :- A class should be open for extension but closed for modification.
// In other words, you should be able to add new functionality to a class without changing its existing code.
// This principle helps to keep the code flexible and maintainable, allowing for new features to be added without breaking existing functionality.

/////////// Bad Example of Open/Closed Principle (OCP) ////////////

// This implementation violates the Open/Closed Principle because if we want to add a new shape, we have to modify the `Shape` class.   
// To add a new shape, we would have to modify the `area` method, which is not ideal.
// To fix this, we can use polymorphism and create separate classes for each shape.
class Shape {
    constructor(type) {
        this.type = type;
    }

    area() {
        if (this.type === 'circle') {
            return Math.PI * Math.pow(this.radius, 2);
        } else if (this.type === 'rectangle') {
            return this.width * this.height;
        }
        throw new Error('Unknown shape type');
    }
}
// usage
const circle = new Shape('circle');
circle.radius = 5;
console.log(`Circle Area: ${circle.area()}`); 
const rectangle = new Shape('rectangle');
rectangle.width = 9;
rectangle.height = 6;
console.log(`Rectangle Area: ${rectangle.area()}`); 
console.log("*".repeat(50));




////////////// Example of Open/Closed Principle (OCP) //////////////

// here we have a base class `Shape2` with an abstract method `area`.
// Each specific shape class (like `Circle`, `Rectangle`, and `Triangle`) extends the `Shape2` class and implements its own `area` method.
// This way, we can add new shapes without modifying the existing `Shape2` class or its subclasses.
class Shape2 {
    area() {
        throw new Error('Method not implemented');
    }
}
class Circle extends Shape2 {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
class Rectangle extends Shape2 {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Triangle extends Shape2 {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    area() {
        return 0.5 * this.base * this.height;
    }
}

const circle2 = new Circle(5);
console.log(`Circle Area: ${circle2.area()}`);
const rectangle2 = new Rectangle(9, 6);
console.log(`Rectangle Area: ${rectangle2.area()}`);
const triangle = new Triangle(4, 3);
console.log(`Triangle Area: ${triangle.area()}`);