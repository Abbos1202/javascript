// -------- 3-dars
// --- Data types

// --- Data types nima ?
// --- Primitive vs Non-primitive
// --- Number
// --- BigInt
// --- String
// --- Boolean
// --- Null
// --- Undefined
// --- Symbols
// --- Objects
// --- Arrays
// --- Functions

// Number

// console.log(123);
// console.log(1.24);

// ------------------------------

// String

// '', "" ``
// console.log('123');
// console.log("123");
// console.log(`123`);
// console.log("Welcome to Webbrain");
// console.log("Welcome to \"Webbrain\"");
// console.log('Welcome to "Webbrain"');
// console.log("Welcome to 'Webbrain'");
// console.log("Welcome /n to 'Webbrain'");

// let name = "Webbrain Academy";

// console.log("Welcome " + name + ", IT Center");
// console.log(`Welcome ${name}, IT Center`);
// console.log(`Welcome ${name}, "IT Center"`);
// console.log(`Welcome ${name},
//  "IT Center"`);

// let name = "Webbrain Academy";

// console.log(typeof name);
// console.log(typeof 1);

// ------------------------------

// BigInt

// console.log(9007199254740992);
// console.log(9007199254740992n + 1n);

// ------------------------------

// Boolean

// console.log(true);
// console.log(false);

// ------------------------------

// Null vs Undefined

// let a;
// let b = null;

// console.log(a, b);
// console.log(typeof a);  // undefined
// console.log(typeof b); // object

// console.log(null == undefined);  // true
// console.log(null === undefined);  // false

// ------------------------------

// console.log(null + 1);  //  1
// console.log(undefined + 1);  //  NaN

// let a;
// let b = null;

// console.log(b === b);  //  true
// console.log({ b } === { b });  //  false

// ------------------------------

// Symbols

// let a = Symbol("text");
// let b = Symbol("text");

// // console.log(a, b);
// console.log(a === b); //  false
// console.log(a == b); //  false

// ------------------------------

// Object  => array, object, function

let ar = ["Muhammad", 12, "Iqboljon"];  // index
// console.log(ar);
// console.log(ar[0]);

let obj = {name: "Webbrain", status: "IT Center"};  // key
// console.log(obj);
// console.log(obj.name);

let func = () => {};
function test() {
    console.log(ar[0]);
    console.log(obj.name);
}

test();

console.log(typeof func);

