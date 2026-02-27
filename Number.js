// By default java script let you use number of 64 bit floaitng point
let x = 123;
console.log(x.toString());// this converts number to string

let y = 9.656;
console.log(y.toFixed(0));// it means I want no decimal after . so you guys adjust accordinly
console.log(y.toFixed(1));// It means I want only 1 decimal after . so it will 9.7
console.log(y.toFixed(2));
console.log(y.toFixed(3));

console.log("Starting with Precision");
let z = 9.565;
console.log(z.toPrecision());
console.log(z.toPrecision(1));
console.log(z.toPrecision(2));
console.log(z.toPrecision(3));

// Converting Variables to Number:
// Number() returns a number converte from its argument
// parseFloat() Parses its argument and returna a floating point number
// parseInt() parses its argument and returns a while nUmber
// If it is not able to convert it into Number it returns NAN







console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number("  10"));
console.log(Number("10  "));
console.log(Number(" 10  "));
console.log(Number("10.33"));
console.log(Number("10,33"));//NAN
console.log(Number("10 33"));//NAN
console.log(Number("John"));// NAN

console.log(Number(new Date("1970-01-01")));
//parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
// They brain is like scan from left to right and it you find . just break out of forming a number and return what you got else NAN
console.log(parseInt("-10"));
console.log(parseInt("-10.99"));
console.log(parseInt("10"));
console.log(parseInt("10.33"));
console.log(parseInt("10 20 30"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));

console.log("number check logic");

console.log(Number.isInteger(10.0));// this returns if number if a integer or not, special caes in case of 10.0


console.log(Number.isFinite(NaN));// true when number is not +INFINTE, -INFINITE, NaN
Number.isNaN(); // this can also be used to check if number is NAN or not


console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);



