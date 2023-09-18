for(var i=1;i<=10;i++){
    document.write(i + "<br>")
}

var num = prompt("What number you want to multiply");
var length = prompt("What number you want to multiply");

for (var i = 1;i<=length;i++){
    document.write(num+" x "+i+" = "+i*num + "<br>")
}

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for (i = 0; i < fruits.length; i++) {
    document.write("elemet at Index"+ i+" is "+fruits[i] + "<br>")
}

for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>")
}

for (var i = 10; i > 0; i--) {
    document.write(i + "<br>")
}
for (var i = 0; i <= 30; i = i+2){
    document.write(i + "<br>")
}
for (var i = 1; i <= 30; i = i+2){
    document.write(i + "<br>")
}

var prom = prompt("Enter your desired pastry")
var A = ["cake", "apple pie", "cookie", "chips", "patties"]

for (let i = 0; i < A.length; i++) {
    if (prom === A[i]) {
        document.write(A[i]+" is available at index "+ i+ " of our bakery")
    }
    else{
        document.write(prom+" is not available at our bakery"+"<br>")
    }
}

var B = [24, 53, 78, 91, 12].
var large = B[0]
for (var i = 0; i < B.length; i++) {
    if (B[i]> large) {
        large = B[i]
    }
}
document.write("largest number: "+ large+"<br>")

var C = [24, 53, 78, 91, 12]
var small = C[0]

for (var i = 0; i < C.length; i++) {
    if (small > C[i]) {
        small = C[i]
    }
}
document.write("smallest number: "+small+"<br>")

for (let i = 0; i < 100; i= i+5) {
    document.write(i +"<br>");
}
