const prompt = require('prompt-sync')();

let totalSeats = 10;
let bookedSeats = 0;
let avaiableSeats = 10;
let seatStatus = {
    seat_1: 'available',
    seat_2: 'available',
    seat_3: 'available',
    seat_4: 'available',
    seat_5: 'available',
    seat_6: 'available',
    seat_7: 'available',
    seat_8: 'available',
    seat_9: 'available',
    seat_10: 'available',
}


let keys = Object.keys(seatStatus);

for (let count = 0; count <10; count++) {

    let enteredLetter = prompt("Seat available, Do you book ?   ");


    if (enteredLetter === 'b') {
        let status = seatStatus[keys[count]];
        status = 'booked';
        console.log(`Seat is now booked successfully.`)
        totalSeats -= 1;
        bookedSeats += 1;
        avaiableSeats -= 1;


    }
}


console.log(`Bus is full. No seat is available ${totalSeats}`);
console.log(`Booked seats ${bookedSeats}`);
console.log(`available  seats ${avaiableSeats}`);


