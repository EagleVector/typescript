"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hi! Cherry";
var myNum = 67;
console.log(myNum.toString());
console.log(greetings.toLowerCase());
console.log(myNum);
console.log(greetings);
// number
// let userId: number = 334466.89;
// userId.valueOf();
// boolean 
var isLoggedIn = false;
console.log(isLoggedIn.valueOf());
// Type Inference
// Everytime we do not need to put type
// Good practise
var userId = 334466.89;
console.log(userId.valueOf());
//ANY - skips the type checking - Should not be used
var hero;
function getHero() {
    return "cap";
}
hero = getHero();
console.log(hero);
// Defining functions in typescript
// Function to add 2 numbers
function addTwo(num) {
    return num + 2;
}
// Function to return string
function getUpper(val) {
    return val.toUpperCase();
}
console.log(addTwo(5));
console.log(getUpper("hey"));
// SignUp User
function signUpUser(name, phone, sub) {
    return { name: name, phone: phone, sub: sub };
}
// Fix one error at a time
console.log(signUpUser("Cherry", '111-111-1111', true));
// Arrow function
var loginUser = function (email, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return { email: email, password: password, isPaid: isPaid };
};
console.log(loginUser('cherry@gmail.com', 123456));
function addnum(num) {
    return "hello";
}
console.log(addnum(56));
