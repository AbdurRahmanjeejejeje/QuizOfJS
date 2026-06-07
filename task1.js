const prompt = require("prompt-sync")();

const correctPin = 999;
let enteredPin = 0;
let attempts = 0;

while(correctPin!==Number(enteredPin) && attempts<3){
    enteredPin = prompt("Enter your ATM pin Number....");
    attempts += 1;

    if(Number(enteredPin)===correctPin){
        console.log("Access granted to you.");
    }

    else{
        console.log("Access denied.");
    }
    
}

if(Number(enteredPin)!==correctPin){
    
console.log(`Your card has block due to you have reached the max attempts ${attempts}`);
}
















