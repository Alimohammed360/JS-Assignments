var cn = prompt("Enter your ctiy name:")

if (cn === "karachi") {
    alert("Welcome to Karachi!")
}
else{
    alert("Karachi aao bhagte bhagte")
}
var gen = prompt("What is your gender?")

if (gen === "male") {
    alert("Good Morning Sir!")
}
else if (gen === "female") {
    alert("Good Morning Ma'am!")
}
else {
    alert("Insan bano")
}

var color = prompt("Write any color from the traffic lights")

if (color === "red") {
    alert("Must Stop!")
} else if (color === "green") {
    alert("Move Now")
} else if (color === "yellow") {
    alert("Ready to Move")
}
else {
    alert("Kindly write color from traffic light")
}



var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

alert("given condition for variable <b>a</b> is true");

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

alert("given condition for variable <b>b</b> is false");

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
alert("condition 1 for variable <b>c</b> is false");

if (c === 13) {
    alert("condition 2 is true");
}
alert("condition 2 for variable <b>c</b> is true");

if (++c < 14) {
    alert("condition 3 is true");
}
alert("condition 3 for variable <b>c</b> is false");

if (c === 14) {
    alert("condition 4 is true");
}
alert("condition 4 for variable <b>c</b> is true");

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}

if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

var firstSubject = +prompt("enter your");
var secndSubject = +prompt("enter your");
var thirdSubject = +prompt("enter your");

var TotalSubject = +prompt("enter your");
var percentage = (firstSubject + secndSubject + thirdSubject) / TotalSubject * 100

if (percentage >= 80 && percentage <= 100) {
    document.write("Percentage: " + percentage + "<br>" + "Grade: A one" + "<br>" + "Remarks: Good Work")
}
else if (percentage >= 70 && percentage <= 80) {
    document.write("Percentage: " + percentage + "<br>" + "Grade: A" + "<br>" + "Remarks: Nicely Done")
}
else if (percentage >= 60 && percentage <= 70) {
    document.write("Percentage: " + percentage + "<br>" + "Grade: B" + "<br>" + "Remarks: Needs More Efforts")
}
else {
    document.write("Percentage: " + percentage + "<br>" + "Grade: F" + "<br>" + "Remarks: Gotta try Harder")
}

var user = prompt("Let's Play a Game\nPick a Number from 0 - 10")
var random = Math.floor(Math.random() * 10)

if (user === random) {
    alert("Congratulations! you Won")
}
else if (++user === random || --user === random) {
    alert("You are So Close")
}
else {
    alert("Try Again!")
}

var divide = prompt("write any Number")

if (divide % 3 === 0) {
    alert("its divisible by 3")
}
else {
    alert("It isnt divisible by 3")
}

var evenOrodd = +prompt("check even or odd")

if (number % 2 === 0) {
    console.log(number + " Its an Even Number")
}
else {
    console.log(number + " is a Odd Number")
}

var temprature = +prompt("Write Temprature")

if (temprature > 40) {
    alert("It is too hot outside.")
}
else if (temprature > 30 && temprature < 40) {
    alert("The Weather today is Normal.")

}
else if (temprature > 20 && temprature < 30) {
    alert("Today's Weather is cool.")

}
else if (temprature > 10 && temprature < 20) {
    alert("OMG! Today's weather is so Cool.")
}

var num1 =  +prompt("Write the first number")
var num2 =  +prompt("Write the second number you want to calculate your fist number")
var op =  prompt("Define the operation as *, / +, -, or %")

if (op === "*") {
    alert(num1 * num2)
} 
else if (op === "/") {
    alert(num1 / num2)
}
else if (op === "+") {
    alert(num1 + num2)
}
else if (op === "-") {
    alert(num1 - num2)
}
else if (op === "-") {
    alert(num1 % num2)
}
else{
    alert("ERROR: enter a valid operation")
}
