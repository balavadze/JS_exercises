'use strict'

// //* Addition. Write a program to add up the numbers 1 to 20.

let i = 0;
let sum = 0;
while (i < 20) {
    sum = sum + i;
    i++
    console.log(i);
}
console.log(sum);

//* There are i bottles of beer on the wall. Write a program that will output, “There is 1 bottle of beer on the wall.” “There are 2 bottles of beer on the wall” up until there are five bottles.

for (let bottlesOfBeer = 1; bottlesOfBeer <= 5; bottlesOfBeer = bottlesOfBeer + 1) { 
    if (bottlesOfBeer == 1) {
        console.log(`There is ${bottlesOfBeer} bottle of beer on the wall.`)
    } else {
        bottlesOfBeer = bottlesOfBeer
    console.log(`There are ${bottlesOfBeer} bottle of beer on the wall.`)
    } 
}

//* The odd/even reporter. Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. “2 is even”).

for (let num = 0; num <= 20; num++) {
  if ( num % 2 == 0) {
 console.log(num + " is even");
  }
  else {
  console.log(num + " is odd");
  };
};

//* Multiplication Tables. Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. “2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (let count = 1; count <= 10; count++ ) {
    const mult = 9;
    const result = count * mult;
    console.log(`${mult} * ${count} = ${result}`);
};

let multiplicationTable = []
for (let numOne=1 ; numOne<11 ; numOne++){
    for (let numTwo=1 ; numTwo<11 ; numTwo++){
    multiplicationTable.push(`${numOne} * ${numTwo} = ${numOne*numTwo}`);
    }
}
console.log(multiplicationTable);

//* Fizz Buzz Write a program which iterates the integers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
for (let number = 1; number < 101; number++) {
    if (number % 15 == 0) 
        console.log("FizzBuzz");
    else if (number % 3 == 0) 
        console.log("Fizz");
    else if (number % 5 == 0) 
        console.log("Buzz");
    else console.log(number);
}

//* Sum of Multiples: Write a program to add the multiples of 3 and 5 under 1000.

let sumOfMultiples = 0;
for (let x = 0; x < 1001; x++) {
    if (x % 3 === 0 ||  x % 5 === 0) {
         sumOfMultiples += x;
    }
 }
console.log(sumOfMultiples)