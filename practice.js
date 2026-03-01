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

