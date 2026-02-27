//In javascript variables are defined with help of let, var, and const
// This prefix tells the scope of the variable rather than defining the data type of the variable
/*
Hoisting is a default behaiour of jaavscript which moves all the declration at the top of scope(be it function scope or script scope)
To summarize, think of Variable Declaration as the way you reserve a "locker" in memory, and Hoisting as the order in which JavaScript sets those lockers up.1. The Summary Table: var, let, and constFeaturevarletconstScopeFunction Scope: Visible throughout the whole function.Block Scope: Only visible inside { curly braces }.Block Scope: Only visible inside { curly braces }.Re-assign?YesYesNo (The reference is locked).Hoisted?Yes (Initialized as undefined).Yes (But stays uninitialized).Yes (But stays uninitialized).The "Catch"Can lead to silent bugs; leaks out of loops.Safer, modern standard for variables.Best for values that shouldn't change.2. Hoisting: The "Behind-the-Scenes" MoveHoisting is the JavaScript Engine's behavior of moving declarations to the top of their scope during the "Compile Phase" (before the code actually runs).The var Behavior (The "Ghost" Value)When you use var, the engine hoists it and gives it a value of undefined. This is why you don't get an error if you log it early—you just get a "ghost" value.JavaScriptconsole.log(name); // undefined
var name = "Gemini";
The let & const Behavior (The "Temporal Dead Zone")These are also hoisted, but the engine refuses to initialize them. It puts them in a "Temporal Dead Zone" (TDZ). If you try to touch them before the line where they are defined, the engine throws a ReferenceError.3. Key Takeaways for Memoryvar is more likely to cause Memory Leaks because it doesn't care about block boundaries (like if statements or for loops).let and const are more memory-efficient because they are destroyed as soon as the code exits the { block } they live in.Use const by default. It tells the engine (and other developers) that this data won't change, which allows the engine to optimize the memory path.The Golden RuleConst whenever you can, Let when you must, and Var... basically never in modern code.Since we've mastered how variables are stored and hoisted, would you like to see how Function Hoisting works? (It's actually different from variable hoisting because the whole function body gets moved to the top!)

*/

let x = 4;
let y = 6;
var z = 2;
console.log(x, y, z);
