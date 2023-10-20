// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// // // Expected output: 9

// const combined = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length
// console.log(combined)

// Pseudo code:

// - first we have to combine the two arrays with the mutant concat
// - then we add .lenght at the end to get the total of the two combined arrays
// - we use console.log to give us the result of the lenght witch in this case is 9

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

// var currentCohort = ["Golf 2023"]

// var stringToArray = currentCohort.split()
// console.log(stringToArray)

// var stringToArray = currentCohort.split("")
// console.log(stringToArray)

// stringToArray.reverse()
// console.log(stringToArray)

// Expected output: "3202 floG"

// // Pseudo code:

// // Reverse in javascript cant be applied to a string, but it can be applied to an array

// // - Var currentCohort selects the variable im selecting witch is Gold 2023

// // - i tried to convert the string into an area using the split method.

// // - i then tried to split up the string into every single character being on its own

// // - I then tried to reverse the array

// // - i could not get it to Worker, it kept telling me .split was not a function. 

// // --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

for (const number of stockExchange) {
    if (number % 2 !== 0) {
      console.log("ODD:", number);
    }
  }


// // Pseudo code:

// // - we create a loop function 
// // - the for function is looking through every number that we have written in the stockExchange Array
// // - the if function checks to see if its an ODD number. We do this by seeing if the number divided (%) by 2 is not equal to 0.
// // the console.log sends a line to us if the statement is true in the above line. if it is we get the ODD: (Numbeer)
