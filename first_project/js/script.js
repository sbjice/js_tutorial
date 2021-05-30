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

let incr = 10,
    decr = 10;

console.log('prefix');
console.log(++incr);
console.log(incr);


console.log('postfix');
console.log(decr++);
console.log(decr);