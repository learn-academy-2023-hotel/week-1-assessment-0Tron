// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: This will give us the lenght every single character
// b) Verify and explain: the output was 10 which is the lenght of every character including the space.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: This will choose the 4th letter 
// b) Verify and explain: the output was the 4th letter, i thought it would have been l but i forgot that we start with 0.
// outcome was = o

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: The outcome should be the first index, outcome should be ruby
// b) Verify and explain: i was correct with my prediction.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: this should make the weekndDays all upper case letters.
// b) Verify and explain: the result was an error.  .toUpperCase is not a function for for strings.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: This should give us the result of 4 since there is 4 items to choose from
// b) Verify and explain:the result was "number". the reason why i think it gave us this is because the typeof was lenght. lenght is associated with mumbers, i figured this out by hovering over lenght on the console line.
