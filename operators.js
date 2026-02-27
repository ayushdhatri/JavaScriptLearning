// basic
console.log(2 + 2);
console.log(2 + "2");
console.log("2" + 2);

// + 
let result = 10 + 5 + " apples";
console.log(result);
// -
let result1 = "100" - "50";
console.log(result1);

// boolean
console.log(0 == false);  // true (Coercion happens)
console.log(0 === false); // false (Different types)

// Logical or by default:
let username = "";
let displayName = username || "Anonymous";
console.log(displayName);

// Null Collesing operator
let score = 0;
let finalScore = score ?? 100;
console.log(finalScore);

// ternary operator:
let age = 20;
let statuss = (age >= 18) ? "Adult" : "Minor";
console.log(statuss);
