let greetings: string = "Hi! Cherry";

let myNum: number = 67;

console.log(myNum.toString());
console.log(greetings.toLowerCase());

console.log(myNum);

console.log(greetings);

// number
// let userId: number = 334466.89;

// userId.valueOf();

// boolean 
let isLoggedIn: boolean = false;

console.log(isLoggedIn.valueOf());

// Type Inference

// Everytime we do not need to put type
// Good practise

let userId = 334466.89;

// TypeScript automatically rekons it

console.log(userId.valueOf());

//ANY - skips the type checking - Should not be used

let hero: string;

function getHero() {
  return "cap"
}

hero = getHero();
console.log(hero);

// Defining functions in typescript

// Function to add 2 numbers

// When we define functions we must do the type check

function addTwo(num: number) {
  return num + 2;
}

// Function to return string

function getUpper(val: string) {
  return val.toUpperCase();
}

console.log(addTwo(5));
console.log(getUpper("hey"));

// SignUp User

function signUpUser(name: string, phone: string, sub: boolean) {
  return {name, phone, sub};
}

// Fix one error at a time

console.log(signUpUser("Cherry", '111-111-1111', true));

// Arrow function

let loginUser = (email: string, password: number, isPaid: boolean = false) => {
  return {email, password, isPaid};
}

console.log(loginUser('cherry@gmail.com', 123456));

function addnum(num: number): string {
  return "hello";
}

console.log(addnum(56));


 
// Temporary fix var declaration
export {};
