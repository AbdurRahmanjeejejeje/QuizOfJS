let month = 0;
let emiAmount = 5000;
let totalMonths = 12;
let totalPaid = 0;


for(month=1; month<=totalMonths; month++){
    totalPaid += emiAmount;
    console.log(`${month} month ${totalPaid} is paid`);
}

console.log(`You have fully settled the emi load. Thank you....`);