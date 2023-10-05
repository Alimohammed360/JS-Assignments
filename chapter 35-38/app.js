var date = new Date
console.log(date);

function greet() {
    var first = prompt("enter your first name")
    var last = prompt("enter your last name")
    alert("greetings " + first + last)
}
greet()

function calc(){
    if (op === "+") {
        console.log(num1 + num2);
    }
    else if(op === "-"){
        console.log(num1 - num2);
    }
    else if(op === "*"){
        console.log(num1 * num2);
    }
    else if(op === "/"){
        console.log(num1 / num2);
    }
}

var num1 = +prompt("enter first number");
var num2 = +prompt("enter first number");
var op = prompt("enter first number");

calc()

function square(){
    sq = ++prompt("write a integer")
    console.log(sq * sq)
}

square()

function factorial(){
    var input = +prompt("write a int")
    // var int = ""
    for (var i = input-1; i >= 1 ;i--) {
        input = input * i
    }
    console.log(input);
}
factorial()

function count(){
    for (var i = int2; i <= int1; i++) {
        console.log(i);
        
    }
}
var int2 = prompt("enter starting value")
var int1 = prompt("enter ending value")

count()
