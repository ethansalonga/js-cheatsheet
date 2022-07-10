/** DATA TYPES
 *  String
 *  Number
 *  Boolean
 *  Undefined
 *  Null
 */

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

/** CONDITIONALS
 *  if else
 *  else if
 */

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
  console.log(!!val);
} else {
  console.log(!!val);
}