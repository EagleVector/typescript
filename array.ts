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








// Temporary fix

export {};