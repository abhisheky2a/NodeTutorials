'use strict';

class Person
{
    constructor(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet()
    {
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }
}

var john = new Person('John','Doe');
var jane = new Person('Jane','Doe');

john.greet();

jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);

console.log(john.__proto__ === jane.__proto__)