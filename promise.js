const GITHUB_API = "https://api.github.com/users/ayushdhatri";
const user = fetch(GITHUB_API);
// this will returnthe pendiong state

// lets register the callback inside the js
user.then((data)=>{
    return data.json();
}).then((finalData)=>{
    console.log(finalData);
});

// Made the notes in notion check from there


 




