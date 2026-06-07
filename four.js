const prompt = require('prompt-sync')();

let seatCount = 50;
let arr = [];
let enteredNumber = 0;

const seatStatus = {};

for (let i = 1; i <= seatCount; i++) {
    seatStatus[i] = 'available';
}

while (seatCount > 0) {

    for(let x=1; x<=seatCount; x++){
        console.log(`Seat number ${x} ${seatStatus[x]}`);
    }

    enteredNumber = parseInt(prompt(`Enter your seat number  `));

    for (let x = 1; x <= seatCount; x++) {

        if (enteredNumber === x) {

            if (seatStatus[x] === 'available') {
                seatStatus[x] = 'booked';
                arr[x] = `Seat number is ${x} ${seatStatus[x]}`;
                console.log(arr[x]);
                seatCount -= 1;
            }

            else {
            console.log('The seat you tried to book has already booked by someone');
        }


        }

        
    }

    console.log(`Remaining seats ${seatCount}`);
}