// ? Q1. In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many tickets were sold?

let ticketSales =6450;
const currency = '$';
let pricePerTicket =15;
let totalTicketsSold = (ticketSales / pricePerTicket);

console.log(totalTicketsSold, currency);

// ? Q2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?

let weekSalary = 500;
const weeksInYear = 52;
let yearlySalary = weekSalary * weeksInYear;

console.log(yearlySalary, currency);

// ? Q3. Calculate the percentage of 17/30. Expected output: "Q3: [number]%" (No need to round the result)

const number1 = 17;
const number2 = 30;
const percentage = (number1 / number2).toLocaleString("en", {
  style: "percent"
})
let output = "Q3:"
console.log(output, percentage);


// ? Q4. Calculate the perimeter of a square. Assume each side is 4.75cm.

let sideSquare = 4.75;
const perimeterSquare = sideSquare * 4;
let value = "cm";

console.log(perimeterSquare, value);


// ? Q5. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.

var side1 = 5;
var side2 = 6;
var side3 = 7;
const perimeterTriangle = (side1 + side2 + side3);

console.log(perimeterTriangle, value)


// ? Q6. Calculate the area of a square. Each side is 5cm.

let base = 5;
let exponent = 2;
const areaSquare = Math.pow(base, exponent);

console.log(areaSquare, value);

// ! Q7. Calculate the area of an right-angled triangle. Assume the length of the sides are 3cm, 4cm, 5cm.
// ? Calculate the area of an angled triangle. 
var num1 = 3; 
var num2 = 4; 
var num3 = 5; 
var perimeter = (num1 + num2 + num3)/2;
var area =  Math.sqrt(perimeter*((perimeter-num1)*(perimeter-num2)*(perimeter-num3)));
console.log(area, value);

// ? Calculate the area of an right-angled triangle. Assume the length of the sides are 3cm, 5cm.

const areaRightAngleTriangle = (num1 * num2) / 2;
console.log(areaRightAngleTriangle, value);

// ?  Q8. Calculate the volume of a cube. Length of each side is 9cm.

let cubeSide = 9;
let exponent1 = 3;
const volumeCube = Math.pow(cubeSide, exponent1);
console.log(volumeCube);


// ? Q9. Calculate the three bills including tips:
// ? €22.35 + 10% tip
// ? €26.67 + 15% tip
// ? €35.92 + 20% tip
// ? Print all three results in one string to the console

{
var billAmount = [22.35, 26.67, 35.92];
var tipPercentage = [10, 15, 20];
let totalBillAmount = billAmount + (billAmount * tipPercentage) / 100;
const currency = '€';

console.log(currency, totalBillAmount,);
}

// ! how to put before each output EUR sign, how to use function calculate?

// Average
// ? Q10. The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4 What is Noemy's average hours worked per day?

{
const arr = [8, 6, 5, 9, 8, 2, 1, 8, 5, 7, 4];
const average = arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(average);
}

// ! reduce means folding in mathematics = you fold an array of numbers to get the sum of it.
    // 1. Call a reducer on the first two elements of the array to get a partial result.
    // 2. Call the same function on the partial result and the third element of the array to create a new result.
    // 3. Repeat until there are no more values left.
    // 4. Return the result.

// ! Q11. A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test? Expected output: "Q11: Score in the sixth test: --".



// Q12. For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class? Expected output: "Q12: James needs a minimum of --% to get an 80% average".