var city=prompt("Enter city name");
if (city=="karachi"){
    console.log("Welcome to city of Lights")
}

var gender=prompt("Enter your Gender");
if (gender=="male"){
    console.log("Good Morning Sir")
}
else if (gender=="female"){
    console.log("Good Morning Ma'am")
}

var color=prompt("Enter the color of road traffic Signal");
if(color=="red"){
    console.log("Must Stop")
}
else if(color=="yellow"){
    console.log("Ready to move")
}
else if(color=="green"){
    console.log("Move now")
}

var remainingFuel=prompt("Enter the remaining fuel in your vehicle");
if (remainingFuel<0.25){
    console.log("Please refill the fuel in your car")
}

var a=4;
if(++a===5){
    alert("given condition for variable a is true")
}
// true

var b=82;
if (b++===83){
    alert("given condtion for bvariable b is true")
}
// not true

var c=12;
if (c++===13){
    alert("condition 1 is true")
}
if (c===13){
    alert("condition 2 is true")
}
// true
if (++c<14){
    alert("condition 3 is true")
}
if (c===14){
    alert("condition 4 is true")
}
// true

var materialCost=20000;
var laborCost=2000;
var totalCost=materialCost+laborCost;
if (totalCost===materialCost+laborCost){
    alert("the cost equals")
}
// true

if(true){
    alert("True")
} 
// true

if(false){
    alert("False")
}

if ("car"<"cat"){
    alert("car is smaller than cat")
}
// true

var english=+prompt("Enter your English marks");
var maths=+prompt("Enter your Maths marks");
var computer=+prompt("Enter your Computer marks");
var obtainedMarks=english+maths+computer;
var totalMarks=300;
var percentage= obtainedMarks/totalMarks*100;

if(percentage>=80){
    var grade="A-one";
    var remarks="Excellent"
}
else if(percentage<=79){
    var grade="A";
    var remarks="Good"
}
else if(percentage<=69){
    var grade="B";
    var remarks="You need to improve"
}
else if(percentage<=50){
    var grade="Fail";
    var remarks="Sorry"
}

console.log("Marks Sheet");
console.log(`Total marks: 300`);
console.log(`Marks Obtained: ${obtainedMarks}`);
console.log(`Percentage: ${percentage}`);
console.log(`Grade: ${grade}`);
console.log(`Remarks: ${remarks}`);

var number=5;
var guess=+prompt("Guess a number rnaging 1-10");
if(guess===number){
    console.log("Bingo!Corret answer")
}
else if(guess==++number){
    console.log("Close enough to the correct answer")
}

var divident=+prompt("Enter a number to check if its divisible  by 3 or not");
var divisor=3;
var quotient=divident%divisor;
if (quotient==0){
    console.log(`Yes! ${divident} is Divisible by 3`)
}
else(
    console.log(`No! ${divident} is NOT Divisible by 3`)
)

var num=+prompt("Enter a number to check if its EVEN or ODD")
if (num%2==0){
    console.log(`${num} is an Even Number`)
}
else(
    console.log(`${num} is an Odd Number`))

var temperature=+prompt("Enter the Temperature");
if (temperature>40){
    console.log("It is too Hot Outside")
}
else if (temperature>30){
    console.log("The Weather today is Normal")
}
else if (temperature>20){
    console.log("Today's Weather is cool")
}
else if (temperature>10){
    console.log("OMG! Today's Weather us so cool")
}

var num1=+prompt("Enter the First number");
var num2=+prompt("Enter the Second number");
var operation=prompt("Enter the operation add, subtract, multiply or divide");

if (operation=="add"){
    console.log(num1+num2)
}
else if (operation=="subtract"){
    console.log(num1-num2)
}
if (operation=="multiply"){
    console.log(num1*num2)
}
if (operation=="divide"){
    console.log(num1/num2)
}
