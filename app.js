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

/**********
 * ARRAYS
 * push
 * filter
 * map
 **********/

// Data structure that can hold multiple data values in one variable
let item1 = 20
let item2 = 30
let item3 = 40
let item4 = 50
let item5 = 100

let arr = [20, 30, 40, 50, 100]
// Index starts from 0
// First element of array:
console.log(arr[0])

// Last element of array:
console.log(arr[arr.length - 1])

/* PUSH Add element onto end of array */
arr.push(200)

/* FILTER */
let newArr = arr.filter((element) => element < 50)

console.log(newArr)

// NOTE: Javascript executes line by line

/** Filter out all the "FAIL" elements in an array
 */

let grades = ["A+", "A", "FAIL"]

console.log(grades.filter((element) => element !== "FAIL"))

/** Filter out all the "FAIL" elements in an array
 *  without using the Array.filter method
 */

// Create a new empty array called "goodGrades"
let goodGrades = []

for (let i = 0; i < grades.length; i++) {
  // add the element onto "goodGrades" only if the current element is not equal to "FAIL"
  if (grades[i] !== "FAIL") {
    goodGrades.push(grades[i])
  }

  console.log(goodGrades)
}

/* MAP */
arr = [1, 4, 9, 16]

let newArray = arr.map((element) => 10)

console.log(newArray)

/** Turn each element in an array of dollars into cents */

let dollars = [1, 5, 10, 3]

let cents = dollars.map((element) => element * 100)

console.log(cents)

/** Turn each element in an array of dollars into cents
 *  without using the map method
 */

cents = []

for (i = 0; i < dollars.length; i++) {
  cents.push(dollars[i] * 100)
}

console.log(cents)

/**********
 * OBJECTS
 **********/

// Used to store multiple properties in one variable
let userFirstName = "Ethan"
let useLastName = "Salonga"
let userDiscordId = "Ethan Salonga#0001"
let userSubscriptionStatus = "VIP"

let users = [
  {
    username: "Ethan",
    email: "ethan@ethansalonga.dev",
    password: "test123",
    subscriptionStatus: "VIP",
    discordID: "Ethan Salonga#0001",
    lessonsCompleted: [0, 1],
  },
  {
    username: "JohnDoe",
    email: "johndoe@ethansalonga.dev",
    password: "johndoe123",
    subscriptionStatus: "VIP",
    discordID: "John Doe#0001",
    lessonsCompleted: [0, 1, 2, 3],
  },
  {
    username: "JaneDoe",
    email: "janedoe@ethansalonga.dev",
    password: "janedoe123",
    subscriptionStatus: "VIP",
    discordID: "Jane Doe#0001",
    lessonsCompleted: [0, 1, 2, 3],
  },
]

function login(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      console.log(users[i])
      if (users[i].password === password) {
        console.log("log the user in - the details are correct")
      } else {
        console.log("password is incorrect - try again")
      }
      return
    }
  }
  console.log("could not find an email that matches")
}

login("doesn'texist@ethansalonga.dev", "test123")

console.log(users[0].lessonsCompleted.map((elem) => elem * 2))

/** Create a register function that accepts:
 *  - username
 *  - email
 *  - password
 *  - subscriptionStatus
 *  - discordId
 *  - lessonsCompleted
 *
 *  Inside your register function:
 *  1. Create a user object
 *  2. Push this user object onto the "users" array
 */

function register(user) {
  users.push(user)
}

register({
  username: "NewUser",
  email: "newuser@ethansalonga.dev",
  password: "abc@123",
  subscriptionStatus: "Pro",
  discordId: "New User#1234",
  lessonsCompleted: [2, 4, 7, 9, 10],
})

console.log(users)

/**********
 * DOM
 **********/

// The DOM allows you to access and change the styling and content of elements on your website

// First way of accessing an element
console.log(document.querySelector("h1"))

// Second way of accessing an element
console.log(document.getElementById("title"))

// Change HTML
document.querySelector(".title").innerHTML += "Frontend Simplified"

let a = 1
a += 2
console.log(a)

// Change CSS
document.querySelector(".title").style.fontSize = "28px"

function changeTitleToRed() {
  document.querySelector(".title").style.color = "red"
}

function toggleDarkMode() {
  document.querySelector("body").classList.toggle("dark-theme")
}
