"use strict";
//array
Object.defineProperty(exports, "__esModule", { value: true });
var data = [1, 2, 4];
var data2 = ["qw", "ty", "fd"];
// we can have both types in an array
var data3 = [true, "23", 12, "chty"];
// Not recommended to use any
console.log(data, data2, data3);
var pi = 3.14;
// pi = 4.2432;
// Literal type of assignment
console.log(pi);
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew";
console.log(seatAllotment);
// Tuples in typescript: Not available in JS
// const users: (string | number)[] = [1, "hc"];
var users = ["kiya", 1, true];
// Restriction on the order of array really matters inside a tuple
var rgb = [255, 168, 432];
var nwusr = [112, "hello"];
nwusr[1] = "gh.vom";
var chrr = { dbId: 3, email: "chrr@gmail.com", userId: 1234,
    startTrial: function () {
        return "hey";
    },
    getCoupon: function (name) {
        return 25;
    } };
