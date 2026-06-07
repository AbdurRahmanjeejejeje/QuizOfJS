//task 2: ATM cash withdrawal
const prompt = require('prompt-sync')();
let balance = 50000;
let userExit = 0;

//check whether balance is above 0 and userexit value is false(0)
while (balance > 0 && userExit === 0) {
  withdrawalAmount = prompt("enter the amount you want to withdraw: ");
  //check if the withdrawal amount is higher than 0 and below or equal to balance. (assuming user can withdraw until the balance is 0 :))
  if (withdrawalAmount > 0 && withdrawalAmount <= balance) {
    balance -= withdrawalAmount;
    console.log(
      `here is your withdrawal amount: ${withdrawalAmount} \n your current balance is: ${balance}`,
    );
    //only ask exit status manually if the balance is 0, or automatically force quit the exit status
    if (balance !== 0) {
      let exitStatus = prompt(
        `do you need another withdrawal? (press letter "s" to continue or press letter "q" to quite) : `,
      );
      //check if the user input is valid or not
      while (exitStatus !== "q" && exitStatus !== "s") {
        console.log("please enter a valid command");
        exitStatus = prompt(
          `do you need another withdrawal? (press letter "s" to continue or press letter "q" to quite) : `,
        );
      }

      if (exitStatus == "q") { //execute while user chooses "q"
        userExit = 1;
        console.log(`thank you for banking with us!`);
      } else { //execute while user choose "s"
        userExit = 0;
      }
    } else {
      console.log("thank you for banking with us!");
    }
  } else if (withdrawalAmount > balance) { //prevents the withdrwal which is higher than balance
    console.log(
      `your withdrwal request is higher than your current balance. your current balance is: ${balance}. `,
    );
  } else { //prevents user from entering string or negative value to the withdrawal
    console.log(
      `you cannot request a negative value or text for a withdrawal amount! put some brain on!!!`,
    );
  }
}