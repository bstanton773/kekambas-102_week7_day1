console.log('Hello World from the main.js file.');


// Basics of JavaScript

/*
    Multiline Comment in JavaScript

    -- Variable Declaration in JavaScript --
    Primitive Data Types: String, Number, Boolean, Undefined, Null
    Objects: Object, Array, Function
*/

// Variable Declaration
// var myName;

// console.log(myName);

// String Declaration
var myName = 'Brian';

// console.log() is equivalent to python's print() function
console.log(myName);
console.log(typeof myName);

// Strings can be created using '', "", or ``, The tick marks (``) have a special behavior to format the string
// Tick Marks + ${varName} is equiv to f"{}" in python
console.log("My name is ${myName}");
console.log('My name is ${myName}');
console.log(`My name is ${myName}`);

// Integer
var myAge = 100;

console.log(myAge);
console.log(typeof myAge);

// Float
var pi = 3.14;

console.log(pi);
console.log(typeof pi);


// Boolean
var boolTrue = true;
console.log(boolTrue);
console.log(typeof boolTrue);

var boolFalse = false;
console.log(boolFalse);
console.log(typeof boolFalse);

// Undefined
var something;

console.log(something);
console.log(typeof something);

// Null
var someNull = null;

console.log(someNull);
console.log(typeof someNull); // A Bug in the code!


// Object DataTypes

// Object
var myObject = {
    a: 123,
    test: 'Hello World'
};

console.log(myObject);
console.log(typeof myObject);

// Array
var myArr = ['Brian', 'Chicago', 'Coding Temple', 10];

console.log(myArr);
console.log(typeof myArr);


// Function
function abc(){}; 

console.log(abc);
console.log(typeof abc);


// Accessing Properties from an object
var person = {
    first: 'Brian',
    last: 'Stanton',
    languages: ['Python', 'JavaScript']
};

console.log(person);

// Bracket Notation
console.log(`My first name is ${person['first']}`);
// Dot Notation
console.log(`My last name is ${person.last}`);

console.log(person.languages);

// When accessing properties in an array (aka the index), use bracket notation
console.log(`My favorite language is ${person.languages[0]}`)

// Arrays have a "length" property
var myNewArr = ['abc', '123', 'hello world'];

console.log(myNewArr, myNewArr.length);


console.clear();

// var vs let vs const

// let - Allows us to declare a variable similar as var *let is block-scoped, var is global-scoped*
let myCity = 'Chicago';
let test;
console.log(myCity);

if (true) {
    var myState = 'Illinois';
    let myCity = 'Champaign';
    let color = 'Blue';
    console.log(myCity, myState, color);
}

console.log(myCity, myState);

// const - similar to let (block-scoped) - 2 differences: 1. Needs a value when declared 2. Cannot be reassigned

const newVariable = 'something';
console.log(newVariable);

// newVariable = 'something else'; // Uncaught TypeError: Assignment to constant variable.


const myBirthday = true;
let ageOfPerson = 30;

if (myBirthday){
    const myFavColor = 'Orange';
    ageOfPerson = ageOfPerson + 1; // OK because ageOfPerson declared with let
    console.log(ageOfPerson);
    // myBirthday = false; // Error because myBirthday declared with const -> cannot be reassigned
    console.log(myFavColor);
}

// console.log(myFavColor); // Error: myFavColor not defined

const cities = ['Chicago', 'New York', 'Denver', 'Portland', 'Miami'];

console.log(cities);

cities[1] = 'San Francisco';

console.log(cities);

// cities = ['Austin', 'Philadelphia']; // Error: Assignment to const
// console.log(cities);


const newPerson = {
    first: 'Abe',
    last: 'Lincoln'
};

console.log(newPerson);

newPerson.first = 'Abraham';
console.log(newPerson);

// newPerson = {
//     first: 'Mary Todd',
//     last: 'Lincoln'
// }; // Error: Assignment to const
// console.log(newPerson);
