// const GITHUB_API = "https://api.github.com/users/ayushdhatri";
// const user = fetch(GITHUB_API);
// this will returnthe pendiong state

// lets register the callback inside the js
// user.then((data)=>{
//     return data.json();
// }).then((finalData)=>{
//     console.log(finalData);
// });

// Made the notes in notion check from there

// Lets createa promises
// Consumer side of the code
//const cart = ["shoes", "pants", "kurta"];
// const promise = createOrder(cart);
 
// // Producer side of the code : 
// function createOrder(cart){
//     const pr = new Promise((resolve, reject)=>{
//         // createOrder
//         // validateCart
//         if(!validateCart(cart)){
//             const err = new Error("Cart is not valid");
//             reject(err);
//         }

//         const orderId = "12345";
//         if(orderId){
//             resolve(orderId);
//         }


//     });

// }


const p1 = new Promise((resolve,reject)=>{
    //setTimeout(()=> resolve("P1 Success"),3000);
    setTimeout(()=> reject("P1 Failed"),3000);
});

const p2 = new Promise((resolve, reject)=>{
    // setTimeout(()=> resolve("P2 is success"), 1000);
    setTimeout(()=> reject("P2 is Failed"), 1000);

});

const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve("P2 Success"),2000);
});


Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res);

});







