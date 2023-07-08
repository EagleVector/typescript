//array

const data: number[] = [1, 2, 4];
const data2: string[] = ["qw", "ty", "fd"];

// we can have both types in an array

const data3: (number | string | boolean) [] = [true, "23", 12, "chty"];
// Not recommended to use any
console.log(data, data2, data3);

let pi:3.14 = 3.14
// pi = 4.2432;
// Literal type of assignment
console.log(pi);

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle";
// seatAllotment = "crew";

console.log(seatAllotment);

// Tuples in typescript: Not available in JS

// const users: (string | number)[] = [1, "hc"];
const users: [string, number, boolean] = ["kiya", 1, true];
// Restriction on the order of array really matters inside a tuple

let rgb: [number, number, number] = [255, 168, 432];

type tUser = [number, string];

const nwusr: tUser = [112, "hello"];

nwusr[1] = "gh.vom";
// values can change

interface UserI {
  readonly dbId: number,
  email: string,
  userId: number,
  googleId?: string,
  startTrial(): string,
  getCoupon(couponName: string, value: number): number
}

// Reopening of the interface

interface UserI {
  githubToken: string
}

const chrr: UserI = {dbId: 3, 
  email: "chrr@gmail.com", 
  userId: 1234,
  githubToken: "hgfdsadtyu76534567",
startTrial: () => {
  return "hey";
},
getCoupon: (name: "cherry25", off: 25) => {
  return 25;
}};

// Interference of the interface

interface Admn extends UserI {
  role: "admin" | "ta" | "learner"
}

const htsh: Admn = { dbId: 3, 
  email: "chrr@gmail.com", 
  userId: 1234,
  role: "admin",
  githubToken: "hgfdsadtyu76534567",
startTrial: () => {
  return "hey";
},
getCoupon: (name: "cherry25", off: 25) => {
  return 25;
}
};

// Temporary fix

export {};