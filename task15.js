let serverStatus = 'online';
let checkOut = 0;
let message;
let isRunning = true;



while(serverStatus==='online'){
    checkOut += 1;
    console.log(`${checkOut}  Server is running, so it is ${serverStatus}`);


    if(isRunning!==true){
         serverStatus = 'offline';
         message = 'server is down';
         console.log(message);
         console.log(`Server is stopped, so it is ${serverStatus}`);
         break;
    }
   
   
}

