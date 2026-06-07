
const empolyeeStatus = {
    emp_1 :'active',
    emp_2 :'inactive',
    emp_3 :'active',
    emp_4 :'inactive',
    emp_5 :'active',
    emp_6 :'active',
    emp_7 :'inactive',
    emp_8 :'active',
    emp_9 :'active',
    emp_10 :'inactive',

}

let keys = Object.keys(empolyeeStatus);



let totalExpense = 0;
let salary = 10000;
let countOfActive = 0;
let countOfInactive = 0;

for(let count=0; count<keys.length; count++){
   let key = empolyeeStatus[keys[count]];
    if(key==='active'){
        console.log(`Employee number ${count+1} is ${key}`)
        countOfActive += 1;
        totalExpense += salary;
    }
    else{
         console.log(`Employee number ${count+1} is ${key}`)
         countOfInactive += 1;
    }
   
}

 console.log(`Active counts are ${countOfActive}`)
  console.log(`Inactive counts are ${countOfInactive}`)
 console.log(`Total salary expense is ${totalExpense}`)