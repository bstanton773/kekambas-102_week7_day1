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

// clear the console for new topic
console.clear();


// Basic Math Operations

// Addition
let sum = 5 + 5;
console.log(sum);
sum += 5; // sum = sum + 5;
console.log(sum);
sum++; // sum += 1 // sum = sum + 1
console.log(sum);

// Subtraction
let diff = 10 - 5;
console.log(diff);
diff -= 3; // diff = diff - 3
console.log(diff);
diff--; // diff -= 1 // diff = diff - 1
console.log(diff);

// Multiplication
let prod = 4 * 5;
console.log(prod);
prod *= 5; // prod = prod * 5;
console.log(prod);

// Division
let quotient = 40 / 5;
console.log(quotient);
quotient /= 2; // quotient = quotient / 2
console.log(quotient);

// Floor Division
let floor = Math.floor(10/3);
console.log(floor);

// Exponents
let square = 5 ** 2
console.log(square);
square **= 2; // square = square ** 2;
console.log(square);

// Modulo
let remainder = 19 % 4;
console.log(remainder);
remainder %= 2; // remainder = remainder % 2;
console.log(remainder);


let myString = 'My age is ';
let myCoolAge = 45;

let addedString = myString + myCoolAge;
console.log(addedString);
console.log(typeof addedString);


console.log(square);

let quizOne = square + '4';
// undefined, 629, 6254, 625+4
console.log(quizOne);

let abcd = square + Number('4');
console.log(abcd);

quizTwo = square - '4';
// undefined, 621, 6254, 625-4
console.log(quizTwo);

let subStrings = 'word' - 'rd';
console.log(subStrings);

// console.clear();

// JavaScript Comparisons
console.log(5 == 5);
console.log(5 == 5.0);
console.log(5 == '5');
console.log(5 === '5');
// == check for equality while allowing for type conversion
// === check for equality but does not allow type conversion

console.log(1 == true);

console.log('10' < 5);

// Be careful with type conversion

console.log('100' > '9'); // Both values are already strings, no conversion needed, compares alphabetically

// When JavaScript compares objects, it looks for REFERENCE ONLY!!!
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];

console.log(arr1 == arr2);
console.log(arr1 === arr2);

let animals = ['dog', 'monkey', 'giraffe'];
let newAnimals = animals;

console.log(animals);
console.log(newAnimals);

console.log(animals == newAnimals);
console.log(animals == ['dog', 'monkey', 'giraffe'])
console.log(newAnimals == ['dog', 'monkey', 'giraffe'])

animals.push('horse');
console.log(animals);
console.log(newAnimals);

// Greater Than (>), Greater Than or Equal (>=), Less Than (<), Less Than or Equal (<=)
// Equal allow type conversion (==), Equal no type conversion (===), 
// Not Equal yes conversion (!=), Not Eqaul no conversion (!==)
console.log(5 != '5');
console.log(5 !== '5');

console.clear();


// Control Flow

// if (codition expression){code to execute if true};

let newNumber = 10;
console.log('Begin');
if (newNumber > 65){
    console.log('Senior');
} else if (newNumber > 18){
    console.log('Adult');
} else {
    console.log('Child');
};
console.log('End');

// Ternary Operator - (condition) ? value if true : value if false
// PYTHON - value = value_if_true if condition else value_if_false

let ageGroup = (newNumber > 65) ? 'Senior' : 'Adult';
console.log(ageGroup);

let ageGroup2 = (newNumber > 65) ? 'Senior' : (newNumber > 18) ? 'Adult' : 'Child'

console.log(ageGroup2);


// && - and
// || - or

newNumber = 72;
if (newNumber > 18 && newNumber < 40){
    console.log('Young Adult');
};

if (newNumber < 18 || newNumber > 65){
    console.log('You get a discount');
};

console.clear();


// JavaScript Loops
// for, for...in, for...of, while, do while

// Standard for loop
// for (counter; expression/condition; increment/decrement for counter){code to execute each loop}

console.log('Loop has started');

for (let i = 0; i <= 20; i++){
    console.log(i)
};

console.log('Loop has ended');

let colors = ['red', 'pink', 'purple', 'green', 'yellow'];

for (let i = 0; i < colors.length; i++){
    console.log(i, colors[i])
}


// for...in -- used to loop over properties of an object
let teams = {
    mlb: 'White Sox',
    nba: 'Bulls',
    nfl: 'Bears',
    nhl: 'Blackhawks'
};

// for (let variable in obj){code to execute for each property in object}
for (let t in teams){
    console.log(t);
    console.log(teams[t])
}


// for...of -- used to loop over the elements in an Array
let planets = ['Mercury', 'Mars', 'Earth', 'Saturn', 'Uranus', 'Jupiter', 'Neptune', 'Venus'];

// for (let variable of array){code to execute for each element in array}
for (let p of planets){
    console.log(p);
};

// While Loop - loop while a condition is true
// while (condition){code to execute while the condition is true}

let num1 = 10;

while (num1 < 100){
    console.log(num1)
    num1+=10
}


// Do While Loop - DO the first portion AT LEAST ONCE
// If the while conidition is still True, continue the while loop

// do {code to execute} while (condition);

let x = 100;

console.log('Do While')
do {
    x *= 2;
    console.log(x)
} while (x < 10);

console.log('While');
x = 100;
while(x < 100){
    x*=2
    console.log(x)
}

// do {
//     var firstName = prompt('What is your name? ')
// } while (firstName);

// try{
    // code to try that might have an issue
// } catch(err){
    // code if there is an isse, `err` is the error message
// }

// someMadeUpFunctionThatDoesntExist()

try{
    someMadeUpFunctionThatDoesntExist()
} catch (e){
    console.error(e)
}
console.log(someVariable);
console.log('Hello world');


console.log(x);

if (x > 10){
    var aRandomString = 'Hello this is a random string';
}

console.log(aRandomString);


var someVariable = 'A String';
