
let name = 'Abdurrahman';
let email = 'rahmannoon12@gmail.com';
let phone = '0772425826';
let address = 'Kattankudy'


const arr = [name, email, phone, address];
const nameOfEachField = ['name', 'email', 'phone', 'address'];

arr.forEach((container, index) => {
    if (container === '') {
        console.log(`You did not fill ${nameOfEachField[index]} field`);
         process.exit();
    }
    else {
        console.log(`${container} field is filled.`);
    }
})

console.log(`You entered your information thank you!`);

