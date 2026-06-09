
let freeTableCount = 0;
let occupiedTableCount = 0;

const tables = {
    tble_01: 'available',
    tble_02: 'available',
    tble_03: 'occupied',
    tble_04: 'occupied',
    tble_05: 'available',
    tble_06: 'occupied',
    tble_07: 'available',
    tble_08: 'occupied',
    tble_09: 'occupied',
    tble_10: 'occupied',
}


let each= Object.keys(tables);


// console.log(`${each[0]} ${tables[each[0]]}`)
for(let check=0; check<each.length; check++){

    if(tables[each[check]]==='available'){
        console.log(`${each[check]} ${tables[each[check]]}`)
        let countingTables = tables[each[check]];

        freeTableCount += 1;
    }

    else{
        occupiedTableCount += 1;
    }
}


console.log(`Free table count is ${freeTableCount}`);
console.log(`Occupied table count is ${occupiedTableCount}`);