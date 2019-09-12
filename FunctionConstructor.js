function Person(firstName, lastName)
{
    this.firstName = firstName;
    this.lastName = lastName;
}

var john = new Person('John', 'Doe')

var jane = new Person('Jane', 'Doe')

Person.prototype.fullName = function() {
    console.log(this.firstName +  " " + this.lastName)
}

console.log(john.firstName + " " + john.lastName)
console.log(jane.firstName + " " + jane.lastName)

john.fullName()
jane.fullName()



console.log(john.__proto === jane.__proto)