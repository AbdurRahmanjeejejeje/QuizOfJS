const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Simple status list
const statuses = [
    "Order Placed",
    "Processing",
    "Shipped",
    "Out for Delivery",
    "Delivered"
];

// Current status (starts at 0)
let current = 0;

// Show current status
function show() {
    console.clear();
    console.log("=== ORDER TRACKING ===");
    console.log("Status: " + statuses[current]);
    console.log("Progress: " + (current + 1) + "/" + statuses.length);
    console.log("");
    console.log("1. Next");
    console.log("2. Reset");
    console.log("3. Exit");
}

// Ask user what to do
function ask() {
    rl.question("Choose (1/2/3): ", (choice) => {
        if (choice === "1") {
            
            if (current < statuses.length - 1) {
                current++;
            }
            show();
            ask();
        }
        
        else if (choice === "2") {
            current = 0;
            show();
            ask();
        }
        
        else if (choice === "3") {
            console.log("Goodbye!");
            rl.close();
        }
        
        else {
            show();
            ask();
        }
    });
}

// Start
show();
ask();