let s1 = 'Hello';
let s2 = "Hello";
let s3 = `Hello`;
console.log(s1, s2, s3);
console.log(s1.length);
console.log(s1.charAt(0));// o-index based
console.log(s2[0]);// this way is also fine
console.log(s1.charCodeAt(0));// this returns character
console.log(s1.codePointAt(2));// functionality wise same but can handle emoji as well

console.log(s1.concat(s2, s3));
console.log(s1);
console.log(s1.slice(0,3));// this can deal with negative number
console.log(s1.substring(1,3)); // this cannot deal with negative number
console.log(s1.toUpperCase());
console.log(s1.trim());// this will remove the white space from start and end both
console.log(s1.trimStart());// this will remove the white space from end
console.log(s1.trimEnd());// this will remove the white space from end
console.log(s1.repeat(5));

console.log(s1.split(","));// this returns an array

let text= "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");// this returns the starting index of the string if found else -1 same with lastIndexOf();
console.log(index);
console.log(text.indexOf("locate", 15));

let text1 = "The rain in SPAIN stays mainly in the plain";
console.log(text1.match("/ain/gi"));

let text2 = "Hello world, welcome to the universe.";
console.log(text2.includes("world"));// its a case sensitite returns true or false

// trying to change string results in no error thrown
// Auto-Boxing : Lets javascript temporarily createa a string wrapper on primite so that we can use method like toUpperCaes();













