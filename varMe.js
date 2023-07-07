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
// TypeScript automatically rekons it
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
// When we define functions we must do the type check
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
// Restricting the return type
function addnum(num) {
    return "hello";
}
console.log(addnum(56));
// Returning more than one type
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]
console.log(heros.map(function (hero) {
    return "hero is ".concat(hero);
}));
// Function that dont return anything
function consoleError(errmsg) {
    console.log(errmsg);
}
// `never` some function never returns a value
function handleError(errmsg) {
    throw new Error(errmsg);
}
// Object misbehaviour in typescript
var user = {
    name: "Cherry",
    email: "Cherry@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Cherry", isPaid: false });
function createCourse() {
    return { name: "reactjs", price: 599 };
}
// misbehaviour
function createNewUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Cherry", isPaid: false, email: "cherry@dev.com" };
createUser(newUser); // ?
function createAUser(user) {
    return 345;
}
console.log(createAUser({ name: "", email: "", isActive: false }));
var myUser = {
    _id: "12345",
    name: "h",
    email: "h@h.com",
    isActive: false
};
// myUser._id = "9087677";
myUser.email = "cherry@gmail.com";
console.log(myUser);
var customer = {
    cardnumber: "5679-9087-2341",
    carddate: "01-01-2023",
    cvv: 675
};
console.log(customer);
// Union Type: when the variable can have more than one data type
var score = 33;
score = "high";
score = "78";
score = 90;
var cherry = { name: "Cherry", id: 324 };
cherry = { username: "cx", id: 7865 };
console.log(cherry);
cherry = { name: "ox", id: 9862 };
console.log(cherry);
function getDbId(id) {
    // making some api call
    console.log("DB id is: ".concat(id));
}
console.log(getDbId(3));
console.log(getDbId('3'));
// Union Narrowing
function getId(id) {
    // console.log(id.toLowerCase()); 
    // Cannot be performed as the fn toLowerCase() is specific to string type
    if (typeof id === "string") {
        return id.toLowerCase();
    }
    else {
        return id + 6;
    }
}
console.log(getId("JHGFDSDFGHJ"));
console.log(getId(1234));
