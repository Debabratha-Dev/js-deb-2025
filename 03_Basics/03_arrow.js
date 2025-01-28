const user = {
    username: "deb",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "deb"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "deb"
//     console.log(this.username);
// }

/*************** Arrow Function**************/
const chai = () => {
    let username = "deb"
    console.log(this);
}

// chai()

/*************** Explicit Return**************/
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 8));

/*************** Implicit Return**************/
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username:"deb"})

console.log(addTwo(3, 8));


const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(function(){})

/*************** Arrow Function syntax in loop**************/

// myArray.forEach(() => {})
// myArray.forEach(() => ())

