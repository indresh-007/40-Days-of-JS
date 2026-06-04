// 1. What is a Class
// 2. Syntax
// 3. Initialize the Object
// 4. Class as Expression
// 5. Class Fields
// 6. Getters and Setters
// 7. Static Properties
// 8. Private and Public
// 9. Extending
// 10. OOP with Classes

// 1. Class -> In JavaScript, a class is a blueprint or template used for creating objects with shared properties (data) and methods (behavior).

// 2. Syntax
class AClass {
    constructor() {}
    method1() {}
    method2() {}
    method3() {}
    method4() {}
}

const a = new AClass(); // Here we are calling the constructor with the new keyword to create the object instance of the class.
const b = new AClass();

console.log(a);
console.log(b);

console.log(a === b);

// 3. Initialize the Object

class Car {
    constructor(model) {
        this.model = model;
    }

    printThis() {
        console.log(this);
    }

    printModel() {
        console.log(this.model);
    }
}

const bmwCar = new Car("BMW");
const audiCar = new Car("Audi");
bmwCar.printThis();
audiCar.printThis();
bmwCar.printModel();

console.log(typeof Car); // function
console.log(Car.prototype);
console.log(Car)
console.log(Car.prototype.constructor);
console.log(Car === Car.prototype.constructor); // true


// 4. Class as Expression

const Employee = class {
    welcome() {
        console.log("Hello Employee");
    }
}

const emp = new Employee();
emp.welcome();


// Named Class
const Dept = class Department {
    welcome() {
        console.log("Welcome to Department");
        console.debug(Department)
    }
}

const d = new Dept();
d.welcome();


// 5. Class Fields

class Phone {
    brand = "Apple";

    make() {
        console.log(this.brand)
    }
};

const phone = new Phone();
console.log(phone);
phone.make(); // Apple


// 6. Getters and Setters

class Animal {

    constructor(name) {
        this.name = name;
    }

    get name() {
        return `The animal name is - ${this._name}`;
    }

    set name(value) {
        if (!value) {
            console.warn("A name is Mandatory!");
            return;
        }

        if(value.length <= 2) {
            console.warn("The name must be of 2 or more characters!");
            return;
        }
        this._name = value;
    }
}

const animal = new Animal("Tiger");
console.log(animal.name);

// animal.name = "";
// console.log(animal.name)


// 7. Static Properties

class MyClass {
    static staticMethod() {
        console.log(this);
    }
}

MyClass.staticMethod();


class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }

  // Static utility method
  static isValidEmail(email) {
    // Very basic check
    return email.includes("@") && email.includes(".");
  }

  // Static factory method to create guest user
  static createGuest() {
    return new User("Guest", "guest@example.com");
  }

}

// Using static method without creating any user
console.log(User.isValidEmail("john@example.com"));  // true
console.log(User.isValidEmail("johnexample.com"));   // false

// Creating a guest user using static method
const guestUser = User.createGuest();
guestUser.greet(); // Hi, I’m Guest

// Creating a real user
const user1 = new User("Indresh", "indresh@example.com");
user1.greet(); // Hi, I’m Indresh


// 8. Private and Public

// Public: These fields and methods are accessible from anywhere
// Private: These fields and methods are accessible only from the inside of the class.

class WashingMachine {
    // Public field
    brand;

    // Private fields
    #powerStatus = false;
    #currentCycle = null;

    // Simulated Protected field (naming convention)
    _log = [];

    constructor(brand) {
        this.brand = brand;
    }

    // Public method
    start(cycle) {
        if (!this.#powerStatus) {
            this.#turnOn();
        }
        this.#currentCycle = cycle;
        // spin
        console.log(`Starting ${cycle} cycle...`)
        this.#spin();

        // drin
        this.#drain();

        this._log.push(`Cycle ${cycle} completed.`);

        // stop
        this.stop();
    }
    
    // Public method
    stop() {
        // turn off
        console.log("Washing machine stopped.");
        this.#turnOff();
    }
    
    // Private method
    #turnOn() {
        this.#powerStatus = true;
        console.log("Power ON");
    }
    // Private method
    #turnOff() {
        this.#powerStatus = false;
        console.log("Power OFF");
    }
    // Private method
    #spin() {
        console.log("Spinning...");
    }
    // Private method
    #drain() {
        console.log("Draining...");
    }

    // Simulated protected method
    _showLog() {
        console.log("Internal Logs:", this._log);
    }
}

const lgWasher = new WashingMachine("LG");
console.log(lgWasher);

lgWasher.start("Quick Wash");
// Output:
/*
Power ON
Starting Quick Wash cycle...
Spinning...
Draining...
Washing machine stopped.
Power OFF
*/
console.log(lgWasher.brand); // LG

// Private access not allowed.
// console.log(lgWasher.#powerStatus); // SyntaxError
// lgWasher.#turnOn(); // SyntaxError

// Public methods
lgWasher.stop(); // Washing machine stopped. Power OFF

// Accessing protected (not recommended but possible)
lgWasher._showLog(); // Internal Logs: [ 'Cycle Quick Wash completed.' ]


// 9. Extending

class Human {
    species = "Homo Sapiens"; // Public field

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
    }

    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
}

// Subclass: Student

class Student extends Human {

    // Overriding a class field
    species = "Homo Sapiens (Student)";

    constructor(name, age, grade) {
        super(name, age); // Calls the constructor of the Human class
        this.grade = grade;
    }

    // Method overriding
    introduce() {
        console.log(
        `Hey! I'm ${this.name}, ${this.age} years old and I study in grade ${this.grade}.`
    );
  }

    study() {
        console.log(`${this.name} is studying...`);
    }
}

// Subclass: Teacher

class Teacher extends Human {

    constructor(name, age, subject) {
        super(name, age); // Inherit name and age from Human
        this.subject = subject;
    }

    // Overriding the introduce method
    introduce() {
        console.log(`Hello, I'm ${this.name}, a ${this.subject} teacher.`);
    }

    teach() {
        console.log(`${this.name} is teaching ${this.subject}.`);
    }
}

const monu = new Student("Monu", 14, 9);
const isha = new Teacher("Isha", 35, "Mathematics");

monu.introduce();  // Overridden method in Student
// "Hey! I'm Monu, 14 years old and I study in grade 9."

isha.introduce();    // Overridden method in Teacher
// "Hello, I’m Isha, a Mathematics teacher."

monu.sleep();      // Inherited from Human
// "Monu is sleeping."

isha.sleep();        // Inherited from Human
// "Isha is sleeping."

console.log(monu.species); // "Homo Sapiens (Student)"
console.log(isha.species);   // "Homo Sapiens" (inherited from Human)
