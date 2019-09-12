var a = 1
var b = 2
console.log(a+b)

function abc()
{
    var myName = "Sunny";
    console.log("Hello " + myName)
}

function xyz(c)
{
    c.myName = "Abhishek"
    c()
    console.log("I am in xyz " + c.myName)
}

var d = abc

d()
xyz(d)

console.log(d)
var e = function(a)
{
    console.log("I am in d "  + a)
}

e(123);
xyz(e(123))