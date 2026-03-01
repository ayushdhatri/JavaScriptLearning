function greetUser(name = ""){
    console.log(`Hello, ${name}!`);
}
greetUser();
greetUser("ayush");

// Q-2 reverse a string
const reverseString = (name)=>{
    const arr = name.split('').reverse().join(',');
    console.log(arr);
}


reverseString("ayush");

// Q-3 check even and odd

const isEven = (num)=>{
    if(num%2 == 0){
        console.log("Number is even");
    }
    else 
        console.log("Number is odd");
}

isEven(2);

// Q-4 find the largest number in the array

const brr = [5,2,3,4,1];
const findMax = (arr)=>{
    let minNumber = Number.NEGATIVE_INFINITY;
    arr.forEach((value, index, arr)=>{
        minNumber = Math.max(minNumber,value);
    });
    console.log("Largest number is " + minNumber);
}

findMax(brr);

// Q-5 Write a functoin that prints number from 1 - n
const fizzBuzz = (n)=>{
    for(let i = 1;i <=n;i++){
       let a = (i%3 == 0)? true : false;
       let b = (i%5 == 0)? true : false;
       console.log(a, b);
       if(a == true && b == true){
        console.log("FizzBuzz");
       }else if(a == true){
        console.log("Fizz");
       } 
       else if(b == true){
        console.log("Buzz");
       }

    }
}

fizzBuzz(5);

// Question 6 valid palindrome
const palindrome = (brr)=>{
    //brr.sort((a,b)=> a - b);
    let n = brr.lenght;
    let i = 0, j = n-1;
    while(i<j){
        if(brr[i] != brr[j]){
            return false;
        }
        i+=1;
        j-=1;
    }
    return true;

}

let ans = palindrome([1,2,1]);
if(ans == true){
    console.log("Plindrom");
}
else{
    console.log("not Valid Palindrome");
}

// Q- 7 Two Sum

const twoSum = (arr, target)=>{
    const seen = {};
    for(let i = 0;i< arr.length;i++){
        let complement = target - arr[i];
        if(complement in seen){
            return [seen[complement],i];
        }
        seen[arr[i]] = i;
    }
    


}
console.log(twoSum([2,7,11,5]));

// Q- 8 Move Zeroes to the end of the arr
const moveZeroes = (arr)=>{
    let i = -1;
    let n = arr.length;
    for(let j = 0;j<n;j++){
        if(arr[j] != 0){
            // it is number
            i++;
           [arr[i],arr[j]] = [arr[j],arr[i]];
        }
    }
    console.log(arr);

}

// Q-9 How to print the frequency 

const getFrequency = (arr)=>{
    const count = {};
    for(const item of arr){
        count[item] = (count[item] || 0) + 1;
    }
    return count;
}

console.log(getFrequency([1,1,2,3,2,1]));


// Q - 10 check if array has duplicates:
const findDuplicates = (arr)=>{
    const seen = new Set();
    const duplicates = [];
    for(const num of arr){
        if(seen.has(num)){
            duplicates.push(num);
        }
        else{
            seen.add(num);
        }
    }
    return duplicates;

}


const removeDuplicats = (arr)=>{
    console.log([...new Set(arr)]);
}
removeDuplicats([1,2,2,3,4,2,]);

// flat a nested Array

const crr =[1,[2,[3,4],5]];
console.log(crr.flat(Infinity));

// Sum of Array
const sumOfArrays = (arr)=>{
    const sum = arr.reduce((total, value)=>{return total + value},0);
    console.log(sum);
}

sumOfArrays([1,2,3,3]);

// Write a function that takes an array and return only the even number
const evenNumber = (arr)=>{
    let num = [];
    num = arr.filter((value, index, arr)=>{ 
        if(value%2 == 0)return value;
    });
    console.log(num);
}
evenNumber([1,21,2,2,3]);


// convert string to tital case ege hello world, Hello World
const titleCase = (s)=>{
    const arr = s.split(' ');
    const brr = arr.map((value, index, arr)=>{
        let temp = value;
        console.log(temp[0].toUpperCase());
       temp = temp[0].toUpperCase() + temp.slice(1);
       return temp;

    });
    console.log(brr);
    let ans = brr.join(' ');
    console.log(ans);

}

let s = "hello world";
titleCase(s);

// count vowels in string
const countVowel = (s)=>{
    let count = 0;
    for(let i = 0;i<s.length;i++){
        if(s[i]  === 'a' || s[i] === 'A' ||
            s[i] === 'e' || s[i] === 'E' ||
            s[i] === 'i' || s[i] === 'I' ||
            s[i] === 'o' || s[i] === 'O' ||
            s[i] === 'u' || s[i] === 'U'){
                count+=1;

        }
    }
    console.log(count);

}
countVowel("ayush");

// remove Duplicate
const removeDuplicate = (arr)=>{
    const crr = [...new Set(arr)];
    console.log(crr);
}
removeDuplicate([1,1,1,1,1,2,2,2,2,3,4,4,4,5]);
