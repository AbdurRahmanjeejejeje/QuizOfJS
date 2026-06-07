const statuses = ['Placed','Confirmed', 'Packed', 'Shipped','Delivered', 'Out for delivery'];


for(let check=0; check<statuses.length; check++){
   if(statuses[check]==='Delivered'){
     console.log(`Your order has ${statuses[check]} 🚚`)
     break;
    
   }

   else{
    console.log(`Your order has ${statuses[check]}`);
   }
  
}