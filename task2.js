const prompt = require('prompt-sync')();

let accountBalance = 50000;
let choice = 'y'

while (accountBalance > 0 && choice === 'y') {

    let enteredMoney = prompt("Enter your amount...");

    if(!isNaN(enteredMoney) && enteredMoney.trim() !== ""){
        if (accountBalance < enteredMoney) {
        console.log(`Your money balance  is only  ${accountBalance}`);

    }

    else {
        let afterCalcMoney = accountBalance - enteredMoney;
        console.log("Balance money is " + afterCalcMoney);

        if (afterCalcMoney <= 0) {
            console.log("Thank you for your visit here.....");
            accountBalance = afterCalcMoney;
        }

        else {

            accountBalance = afterCalcMoney;
            choice = prompt(`Do you eant to withdraw even more press Y or to quit press N `);
            while (choice !== 'y' && choice !== 'n') {
                choice = prompt(`Do you eant to withdraw even more press Y or to quit press N  `);
            }
            if (choice === 'n') {
                console.log("Thank you for your visit here.....");
            }
        }



    }

    }

    else{
        console.log(`Enter number like 12345....`);
    }

}


