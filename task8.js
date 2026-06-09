const prompt = require('prompt-sync')();




const statuses = ['Placed','Confirmed', 'Packed', 'Shipped', 'Out for delivery','Delivered'];


for(let check=0; check<statuses.length; check++){
  
   if(statuses[check]==='Delivered'){
     console.log(`Your order has ${statuses[check]} 🚚`)
      console.log( product.name);
     break;
    
   }

   else{
    console.log(`Your order has ${statuses[check]}`);
   }
  
}





