// singleton

// Object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Debabratha",
    "full name": "Debabratha Bhattacharya",
    [mySym]: "myKey1",
    age: 26,
    location: "Durgapur",
    email: "deb@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "deb@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "deb@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js User");
    
}

jsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`);
    
}

jsUser.greeting();
jsUser.greetingTwo();
// console.log(jsUser.greeting);

