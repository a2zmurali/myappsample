"use strict";
let x = 1;
let y = 2;
const sum = x + y;
const result = `Sum of ${x} and ${y} is ${sum} `;
console.log(result);
const array = [1, 2, 3, 4, 5, 6];
let display = array.map((a) => a * a).forEach((res) => console.log(res));
//object
let obj = {
    id: 1,
    name: "murali"
};
let obj1 = {
    id: 1,
    name: "murali"
};
//type asser
let z = 5;
let z2 = z; // here we modify
//or
let z3 = z; // both work
//function
function Add(a, b) {
    let sum = a + b;
    return sum;
}
console.log(`addtion value :${Add(13, 14)}`);
function Displaytext(a) {
    if (typeof a === "number")
        console.log(`value passed ${a} is number`);
    if (typeof a === "string")
        console.log(`value passed ${a} is string`);
}
Displaytext(21);
Displaytext("april");
let obj121 = {
    id: 1,
    name: 'murali'
};
console.log(obj121);
//Hi
//# sourceMappingURL=index.js.map