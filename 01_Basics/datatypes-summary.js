// # Primitive
    // 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt
    const score = 100    
    const scoreValue = 100.3

    const isLoggedIn = false
    const outsideTemp = null
    let userEmail;

    const id = Symbol('123')
    const anotherId = Symbol('123')

    // console.log(id === anotherId);

    const bigNumber = 35555445445555555n;
    // console.log(typeof bigNumber);


// # Reference (Non-Primitive)

    // Array, Objects, Functions 
    const heros = ["Shaktiman", "Motu Patlu", "Krish"]
    let obj = {
        name: "Debabratha",
        age: 26,
    }

    const myFunc = function (){
        console.log("Hello world");
        
    }

    console.log(typeof heros);
    

    // Link of TypeOf : https://262.ecma-international.org/5.1/#sec-11.4.3