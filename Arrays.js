const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
console.log(fruits.toString().split(","));
fruits.sort();
console.log(fruits);
console.log(Array.isArray(fruits));// to check if array is array or not

const myArr = [[1,2],[3,[4,5]],[6,7]];
console.log(myArr.toString().split(','));
console.log(myArr.flat(Infinity));


const sentence = ["Hello World", "How are you"];
const words = sentence.flatMap((s)=>{
    return s.split(" ");

});
console.log(words);

fruits.splice(2,2,"kiwi","Lemon");// here first parameter is the index, 2- number of element to remove,and what to add
console.log(fruits);

/*
We have many ways to find something in array
we just want to do simple search use indexOf(), lastIndexOf(), includes()
if you want some conditional search:
use find()= return the value based on condition, findIndex() return the index of value based on condition , findLast(), findLastIndex()
find(()=>{})
*/

fruits.sort();// it modifies the orignal array
//fruits.toSorted();// it will create a new array and return it after sorting without touching fruits

fruits.reverse(); // reverse the orignal array 
//fruits.toReversed(); // create a new array reference and reverse it and return the reversed array


const points = [40,100,1,5,25,10];
points.sort((a,b)=> a-b)
console.log(points);

const number = [45,4,9,16,25];
// foreach does not return any thing
number.forEach((value, index, arr)=>{
    console.log(value);
    console.log(index);
});
// map method return after modifing the data and creata a new array
const number2 = number.map((value, index, arr)=>{
    return value * 2;
});
console.log(number2);
number2.sort((a, b)=> a - b);
console.log(number2);
const number3 = number2.filter((value, index, arr)=>{
    return value > 20;
});
console.log(number3);


