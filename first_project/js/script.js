"use strict";

/*
let number = 5;

const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
    a: 50,
    b: 40
};
obj.s = 5;
console.log(obj); // changeable type

console.log(4 / 0); //Infinity
console.log(-4 / 0); //-Infinity
console.log("4" / "s"); //NaN

const object = {
    name: "John",
    age: 25,
    isMarried: "not married",
    sayHello: function () {
        console.log("Hello, i am " + this.name +
            ", i am " + this.age,
            " and i am " + this.isMarried);
    }
};
object.sayHello();

console.log(object["age"]); //different types of referencing properties 
console.log(object.age);


let arr = ["plum", "orange", 6, true, []];
console.log(arr[2]);

*/
// const result = confirm("Are you here?");
// console.log(result);


// const answer = prompt("How old are you?", "18")
// console.log(typeof(answer));

// const answer = +prompt("How old are you?", "18")
// console.log(typeof(answer));

/*
const answers = [];
answers[0] = prompt("what`s your first name?", "");
answers[1] = prompt("what`s your second name?", "");
answers[2] = prompt("what`s your age?", "");


document.write(answers);
*/

// let user = prompt("What is your name?","");
// alert(`Hello ${user}!`);


/*
console.log('arr' + " - object");
console.log(`${typeof(4 + "5")},${4 + "5"}`);
console.log(`${typeof(4 + +"5")},${4 + +"5"}`);
*/


/*
let incr = 10,
    decr = 10;

console.log('prefix');
console.log(++incr);
console.log(incr);


console.log('postfix');
console.log(decr++);
console.log(decr);
*/


// condition code snippet
/*
const num = 50;

if (num < 49) {
    console.log("Error");
} else if (num > 100){
    console.log("Too Much");
} else {
    console.log("Ok!");
}

// ternary operator
(num === 50) ? console.log("Ok!") : console.log("Error");
*/


// switch operator
/*
const num = 50;

switch (num) {
    case 49:
        console.log("Error");
        break;
    case 50:
        console.log("Ok!");
        break;
    default:
        console.log("No case for given num");
        break;
}
*/

// let num = 50;

// while (num < 55) {
//     num++;
//     console.log(num);
// }

// do {
//     num++;
//     console.log(num);
// }
// while (num < 55);

// for (let i = 1; i < 8; i++){
//     console.log(i);
// }


// function syntax 
/*
function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage("Hello World!");
*/

// function exression
/*
let fun = function(text) {
    console.log(text);
};

fun("Hello!");
*/


// arrow function
/*
const calc = (a, b) => { return a + b; };
calc(4, 5);
const calc = (a, b) => a + b ;
calc(4, 5);
const calc = a => a * a ;
calc(4);

*/


// callback function
/*
function learnJS(lang, callback){
    console.log(`I learn ${lang}`);
    callback();
}

learnJS("JavaScript",(str = "I think i will learn it well") => console.log(str));
*/



// object destructuring
/*
const obj = {
    name: "John",
    age: 25,
    isMarried: "not married",
    colors: {
        border: "black",
        bg: "red",
    },
    sayHello: function () { // own method creation
        console.log("Hello, i am " + this.name +
            ", i am " + this.age,
            " and i am " + this.isMarried);
    }
};

delete obj.sayHello;
console.log(obj);

for (let key in obj) {
    console.log(obj[key]);
}

obj.keys() // has length
const {border, bg} = obj.colors;

*/


// working with arrays
/*
let arr = [2, 4, 6, 8, 10];
for (let val of arr) {
    console.log(val);
}

arr.forEach(function(item, index, array){
    // item, index, array are parameters available by default in forEach function
})


let str = "23,45,56,67,89,908";
let values = str.split(",");
let joined = values.join(";");


values.sort(); // sorts as strings by default, accepts callback with two arguments 
function compareNum(a, b) {
    return a - b;
}
values.sort(compareNum); // sorts numeric values correctly

*/


// working with sending parmeters by value, by ref

// function that copies keys and values of first object into second objects
// it creates shallow copy if used without recursion

/*
const x = {
    a: 2,
    b: 4,
    c: 6,
};

const y = {
    d: 0,
};

console.log(Object.assign(y, x));

const old = [1, 2, 3];
const newOne = old.slice(); // deep copy of array

const arr1 = [1, 2, 3], arr2 = [4, 5, 6],
        arr3 = [...arr1, ...arr2]; // ... - spread 
        
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [1, 2, 3];
log(...num); // spread


const q = {
    one: 1,
    two: 2,
};
const newObj = { ...q }; // spread

*/