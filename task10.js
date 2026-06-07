let totalQuantity = 0;
let lowStockLimit = 15;
let name;
let quantity = 0;


let products = [
    {
        name: 'Cpu',
        quantity: 20,
    },

    {
        name: 'Motherboard',
        quantity: 10,
    },

    {
        name: 'Gpu cards',
        quantity: 30,
    },

    {
        name: 'Ram',
        quantity: 65,
    },

    {
        name: 'Ssd',
        quantity: 5,
    }


];


for(let check = 0; check<products.length; check++){
    
    if(products[check].quantity<=lowStockLimit){
        console.log(`LOW STOCK ${products[check].name}`);
    }

    else{
         console.log(`In STOCK ${products[check].name}`);
    }

    totalQuantity += products[check].quantity;
}

console.log(`Total quantity of these products are ${totalQuantity}`);




