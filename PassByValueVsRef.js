
//Pass by value
var a = "Hi";

function changePrimitive(a)
{
    a = "Hello";
}

changePrimitive(a)
console.log(a)

//Pass by reference

var person = {
    firstName : 'Abhishek',
    lastName : 'Chakraborty'
}

function changeObject(person)
{
    person.firstName = "John";
    person.lastName = "Doe";
}

changeObject(person)

console.log(person)
