'use string'
//* Write a function that takes in one parameter and logs that parameter 3 times into the console.

for (let step = 0; step < 3; step++) {
  console.log('log that parameter 3 times into the console');
}

//* Write a function that takes in one parameter and returns that parameter repeated five times. For the input “Cat” it would return “CatCatCatCatCat”

for (let i= 0; i<=5; i++ ) {
console.log('Cat');
}
//? how to put in one line

//! Write a function that takes in two parameters, the first one should be a number and the 2nd one should be a string. The functions returns the 2nd argument repeated as many times as the 1st argument defins. For the inputs 3 and “Woah” it should return WoahWoahWoah


//* Write a function that takes in an array of numbers as a parameter. It should return the largest number in the array. For the input [1,6,83,91,0,-4,1337,5] it should return 1337

let arrayOfNumbers = [1,6,83,91,0,-4,1337,5];
console.log(Math.max(...arrayOfNumbers));


