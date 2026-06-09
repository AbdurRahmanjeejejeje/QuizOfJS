const studentInfo = [

    {
        ID: 'S0001',
        name: 'Abdurrahman',
        age: 20,
        Address: 'Kattankudy',
        Batch: 'Second batch'
    },

    {
        ID: 'S0002',
        name: 'Abdullah',
        age: 16,
        Address: 'Kattankudy',
        Batch: 'Second batch'
    },

    {
        ID: 'S0003',
        name: 'Afrith',
        age: 24,
        Address: 'Kattankudy',
        Batch: 'Second batch'
    },

    {
        ID: 'S0004',
        name: 'Akeel',
        age: 20,
        Address: 'Kattankudy',
        Batch: 'Second batch'
    },

    {
        ID: 'S0005',
        name: 'Azam',
        age: 30,
        Address: 'Kattankudy',
        Batch: 'Second batch'
    },
]

console.log("==========================================Keys Only===========================================");

for (let objCount = 0; objCount < studentInfo.length; objCount++) {
    let keys = Object.keys(studentInfo[objCount])
    console.log(keys);
}


console.log("==========================================Values Only===========================================");

for (let objVal = 0; objVal < studentInfo.length; objVal++) {
    let id = studentInfo[objVal].ID;
    let name = studentInfo[objVal].name;
    let age = studentInfo[objVal].age;
    let address = studentInfo[objVal].Address;
    let batch = studentInfo[objVal].Batch;

    console.log(id);
    console.log(name);
    console.log(age);
    console.log(address);
    console.log(batch);
}

console.log("==========================================Both combined===========================================");


for (let objBoth = 0; objBoth < studentInfo.length; objBoth++) {
  
    console.log(studentInfo[objBoth]);

   
}