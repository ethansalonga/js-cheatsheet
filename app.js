/**********
 *  DATA TYPES
 *  String
 *  Number
 *  Boolean
 *  Undefined
 *  Null
 **********/

/* STRING */
"Hello world"
"Frontend Simplified is amazing"
"100"
"Ethan"[4] // Returns "n"

let str = "Ethan Salonga"
console.log(str[str.length - 1]) // Always returns last character

/* NUMBER */
2
10.5 - 5

/* BOOLEAN */
true
false

/* NULL & UNDEFINED */
null // Variable is set specifically to nothing
undefined // Value was never set in the first place
NaN // Error when program was computing numbers

/** VARIABLES
 * var
 * let
 * const
 */

/* VAR */
// Outdated, do not use

/* LET */
let isRaining = true
let temperature = 30
let planet = "Earth"

temperature = temperature + 2 // Value can be reassigned
console.log(temperature) // Returns 32

/* CONST */
// Value can NOT be reassigned

/* CONVERTING TEMPERATURES QUESTION */
let celsius = 10
let fahrenheit = celsius * 1.8 + 32

console.log(fahrenheit)

/* EQUALITY */
// "==" checks the values
// "===" checks the values and the types
// Almost always use triple equals
let bool = "1" === 1
console.log(bool)

!true // Returns false
!false // Returns true
// !== is not equal to

/**********
 *  CONDITIONALS
 *  if else
 *  else if
 *  comparison operators
 *  logical operators
 *  falsy values
 *  truthy values
 *  ternary operators
 **********/

let subscribed = true
let loggedIn = true

if (subscribed === true) {
  console.log("show the video")
} else if (loggedIn === true) {
  console.log("tell the user to upgrade their subscription")
} else {
  console.log("tell user to log into account")
}

let cash = 90
let price = 40

const difference = cash - price

if (cash > price) {
  console.log(`you paid extra - here's ${difference} dollars change`)
} else if (cash === price) {
  console.log("you paid the exact amount, have a nice day!")
} else {
  console.log(`not enough money - you still owe ${difference * -1} dollars`)
}

/* COMPARISON OPERATORS */
// >, <, >=, <=

/* LOGICAL OPERATORS */
// && checks if the left and right side of the comparison is true
cash = 50
price = 40
let isStoreOpen = false

if (cash >= price && isStoreOpen) {
  console.log("print the receipt")
}

// || checks if the left or right side of the comparison is true
if (cash >= price || isStoreOpen) {
  console.log("print the receipt")
}

/* FALSY VALUES */
// undefined
// null
// NaN
// 0
// ("")
// false

/* TRUTHY VALUES */
// 10
// 3.14
// "Frontend Simplified"
// "false"
// "0"

// []
// {}
let val = "Ethan"

if (val) {
  console.log(!!val)
} else {
  console.log(!!val)
}

/* TERNARY OPERATORS */
// Shortcut for an if else condition
// isObese ? "unhealthy" : "healthy"
// subscribed ? "show video" : "hide video"

let hot = true
hot ? console.log("weather is hot outside") : console.log("weather is cold")

subscribed = false
loggedIn = true

str = subscribed || loggedIn ? "show the video" : "hide the video"
console.log(str)

cash = 50
price = 40
isStoreOpen = true

str = cash >= price && isStoreOpen ? "give receipt" : "do not give receipt"
console.log(str)

/**********
 *  LOOPS
 *  for loop
 *  while loop
 *  do while loop
 **********/

// Repeat the same code over and over again
// DRY = Don't repeat yourself

/* WHILE LOOP */
let count = 1
while (count <= 100) {
  console.log(count)
  count++
  // count--
}

/* FOR LOOP */
for (let i = 0; i < 100; i++) {
  console.log(i + 1)
}

// set "i" to 0
// "i" less than how many times we want to loop
// increment "i" by 1

/** Write a for-loop that loops through 1 to 20
 * If the number is divisible by 3, print "Frontend"
 * If the number is divisible by 5, print "Simplified"
 * If the number is divisible by 3 and 5, print "Frontend Simplified"
 * If the number is *not* divisble by either 3 or 5, print the number
 */

for (i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} -> Frontend Simplified`)
  } else if (i % 3 === 0) {
    console.log(`${i} -> Frontend`)
  } else if (i % 5 === 0) {
    console.log(`${i} -> Simplified`)
  } else {
    console.log(`${i} -> ${i}`)
  }
}

/** Print out every character from the string
 *  "Frontend Simplified"
 */

str = "Frontend Simplified"
for (i = 0; i < str.length; i++) {
  console.log(str[i])
}

/**********
 *  FUNCTIONS
 *
 **********/

// A block of code designed to perform a particular task
// DRY - Don't repeat yourself

// Function definition
function welcomePersonToFES(firstName, lastName) {
  console.log(`Welcome to FES, ${firstName} ${lastName}`)
}

// Call the function
welcomePersonToFES("Ethan", "Salonga")
welcomePersonToFES("John", "Doe")

function sumOfTwoNumbers(num1, num2) {
  // parameter when defining
  return num1 / num2
}

console.log(sumOfTwoNumbers(10, 20)) // argument when calling

/** Create a function that converts Celsius to Fahrenheit
 *  Celsius to Fahrenheit formula:
 *  F = C x 1.8 + 32
 */

// function celsiusToFahrenheit(celsius) {
//   return celsius * 1.8 + 32
// }

// Arrow function
const celsiusToFahrenheit = (celsius) => {
  return celsius * 1.8 + 32
}

console.log(celsiusToFahrenheit(0))
