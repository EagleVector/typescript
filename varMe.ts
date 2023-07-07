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

// Restricting the return type

function addnum(num: number): string {
  return "hello";
}

console.log(addnum(56));

// Returning more than one type

function getValue(myVal: number) {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
}

const getHello = (s: string):string => {
  return "";
}

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]

console.log(heros.map((hero: string): string => {
  return `hero is ${hero}`;
}));

// Function that dont return anything

function consoleError(errmsg: string): void{
  console.log(errmsg);
}

// `never` some function never returns a value
function handleError(errmsg: string): never{
  throw new Error(errmsg);
}

// Object misbehaviour in typescript

const user = {
  name: "Cherry",
  email: "Cherry@gmail.com",
  isActive: true
}

function createUser({name: string, isPaid: boolean}) {}

createUser({name: "Cherry", isPaid: false});

function createCourse():{name: string, price: number}{
  return {name: "reactjs", price: 599};
}

// misbehaviour

function createNewUser({name: string, isPaid: boolean}) {}

const newUser = {name: "Cherry", isPaid: false, email: "cherry@dev.com"};

createUser(newUser);   // ?

// type alias

type User = {
  name: string;
  email: string;
  isActive: boolean
}

function createAUser(user: User) {
  return 345;
}

console.log(createAUser({name: "", email: "", isActive: false}));

//READONLY - cannot be changed
//`?` - optional argument
// Scenario based

type usr = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credCard?: number
}

let myUser: usr = {
  _id: "12345",
  name: "h",
  email: "h@h.com",
  isActive: false
}

// myUser._id = "9087677";
myUser.email = "cherry@gmail.com"
console.log(myUser);


// MIX AND MATCH

type cardNumber = {
  cardnumber: string
}

type cardDate = {
  carddate: string
} 

type cardDetails = cardNumber & cardDate & {
  cvv : number
}

let customer: cardDetails = {
  cardnumber: "5679-9087-2341",
  carddate: "01-01-2023",
  cvv: 675
}

console.log(customer);

// Union Type: when the variable can have more than one data type

let score: number | string = 33;

score = "high";

score = "78";

score = 90;

type Uzer = {
  name: string;
  id: number
}

type Admin = {
  username: string,
  id: number
}

let cherry: Uzer | Admin = { name: "Cherry" , id: 324 }

cherry = {username: "cx", id: 7865}

console.log(cherry);

cherry = {name: "ox", id: 9862}

console.log(cherry);

function getDbId(id: number | string) {
  // making some api call
  console.log(`DB id is: ${id}`);
}

console.log(getDbId(3));
console.log(getDbId('3'));

// Union Narrowing

function getId(id: number | string) {
  // console.log(id.toLowerCase()); 
  // Cannot be performed as the fn toLowerCase() is specific to string type
  if (typeof id === "string") {
    return id.toLowerCase()
  } else {
    return id + 6;
  }
}

console.log(getId("JHGFDSDFGHJ"));
console.log(getId(1234));


// Temporary fix
export {};
