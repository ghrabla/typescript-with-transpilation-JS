"use strict";
let age = 40;
if (age > 40) {
    console.log("yeep");
}
else {
    console.log(age.repeat(3));
}
let name = "kamal";
if (name > 40) {
    console.log("yeep");
}
else {
    console.log(name.repeat(3));
}
let myname = "kamal";
let myage = 20;
let love = true;
myname = 33;
let Data = "hi there";
Data = 44;
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(1, "6"));
console.log(typeof add(1, "6"));
let all;
all = "kamal";
all = 20;
all = true;
let myfriends = ["adnane", "abdelhak", "amine", "mouad", "abd rafie", 12];
for (let i = 0; i < myfriends.length; i++) {
    console.log(myfriends[i].repeat(3));
}
let arr1 = ["a", "b", "c"];
let arr2 = [1, 2, 3];
let arr3 = [true, false];
let arrall = ["a", "b", "c", 1, 5, [true, false]];
let msgIn = true;
const funshowwords = (fname, fage, salary) => {
    let test = 12;
    if (msgIn) {
        return `your name is ${fname} and age is ${fage} , salary `;
    }
    return "no data to show";
};
console.log(funshowwords("kamal", 20, 20000));
function returndata(name, age, city) {
    return `${name} - ${age} - ${city}`;
}
returndata("kamal", 20, "safi");
function addall(...nums) {
    let result = 0;
    nums.forEach((nums) => result += nums);
    return result;
}
console.log(addall(10, 99, 57, +true));
//# sourceMappingURL=index.js.map