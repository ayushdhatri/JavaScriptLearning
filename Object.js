const person = {
  name: "John",
  age: 30,
  city: "New York"
};

for(let [key, value] of Object.entries(person)){
    console.log(key + "-> " +  value);
}

console.log(person);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
