console.log("working...");

// Values are
// 1) Boolean - (True and False)
// 2) Strings - (words,sentence,mix of numbers & words (example. address))
// 3) Number - (integer and decimal values which are 2, 4, 101, 23.50, 34.99)

// data types present in JS(primitive)

// strings format are
// strings always written in between single/double quote.
"2, somelane, somecity - 440017"
'2, somelane, somecity - 440017'
"Aroh", "7840911384"

// what are strings?
// Anything wbhich is written inside single/double quote.

// what are boolean values?
// It has only two values i.e is true or false.

// what are numbers?
// includes integers, decimals ex. 10, 29, 30.1, 100.001

// Variables : They are used to store the values which could be  of any type i.e. Number type or String type or Boolean type.

// Rules for assigning names to variables.
// Try to make the variable name declarative.
// It uses Camel cases.
// Variable names are case sensitive.

// FName, fname, Fname, fnAme, fnaMe

// Keywords are of three types
// let, var, const

// --------declaring / initializing/ redeclaring------------

// let = These keywords are used to assign variables with values.
// 1. They can be declared in a line and then initialized with a value in another line.
// 2. They can be also declared and initialized in the same line.
// 3. They cannot be redeclared.... but can be reinitialized.
// 4. **** We cannot have Two variables with same name in let******

let FName = "Aroh"; // declared and initialized in same line
let fname;
fname = "Krushna";
console.log(fname);
fname = "Gahane";
console.log(fname);


// const = These keywords are used to assign variables with values.
// 1. They can be also declared and initialized in the same line only.
// 2. They cannot be redeclared.
// 3. But const can't  be reinitialized also.
// 4. **** We cannot have Two variables with same name in const******

const lname = "Gahane1";
// lname = "Aroh";
console.log(lname);


// var = These keywords are used to assign variables with values.
// 1. They can be declared in a line and then initialized with a value in another line.
// 2. They can be also declared and initialized in the same line.
// 3. They can be redeclared and also can be reinitialized.
// 4. **** We can have Two or more variables with same name in var******

var age = 25;
var age;
age = 26;
console.log(age);
age = 27;
console.log(age);
