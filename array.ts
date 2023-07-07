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



// Temporary fix

export {};