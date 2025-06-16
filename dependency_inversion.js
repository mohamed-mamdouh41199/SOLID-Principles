// this is final principle of SOLID principles
// Dependency Inversion Principle (DIP) :- High-level modules should not depend on low-level modules. Both should depend on abstractions.
// In other words, the high-level module should not depend on the low-level module, but both should depend on abstractions.
// This principle helps to reduce the coupling between high-level and low-level modules, making the code more flexible and easier to maintain.
// /////////// Bad Example of Dependency Inversion Principle (DIP) ////////////
class LightBulb {
    turnOn() {
        console.log("Light bulb is on");
    }
    turnOff() {
        console.log("Light bulb is off");
    }
}
class Switch {
    constructor(lightBulb) {
        this.lightBulb = lightBulb;
    }
    toggle() {
        if (this.isOn) {
            this.lightBulb.turnOff();
        } else {
            this.lightBulb.turnOn();
        }
        this.isOn = !this.isOn;
    }
}
// usage
const lightBulb = new LightBulb();
const switch1 = new Switch(lightBulb);
switch1.isOn = false; // Initial state
switch1.toggle(); // Light bulb is on
switch1.toggle(); // Light bulb is off
console.log("*".repeat(50));

// ////////////// Good Example of Dependency Inversion Principle (DIP) //////////////
class Switchable {
    turnOn() {}
    turnOff() {}
}
class LightBulb2 extends Switchable {
    turnOn() {
        console.log("Light bulb is on");
    }
    turnOff() {
        console.log("Light bulb is off");
    }
}
class Fan extends Switchable {
    turnOn() {
        console.log("Fan is on");
    }
    turnOff() {
        console.log("Fan is off");
    }
}
class Switch2 {
    constructor(device) {
        this.device = device;
        this.isOn = false; // Initial state
    }
    toggle() {
        if (this.isOn) {
            this.device.turnOff();
        } else {
            this.device.turnOn();
        }
        this.isOn = !this.isOn;
    }
}
// usage
const lightBulb2 = new LightBulb2();
const fan = new Fan();
const switch2 = new Switch2(lightBulb2);
switch2.toggle(); // Light bulb is on
switch2.toggle(); // Light bulb is off
const switch3 = new Switch2(fan);
switch3.toggle(); // Fan is on
switch3.toggle(); // Fan is off
console.log("*".repeat(50));