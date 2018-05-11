printDelayedFibs(5);

function printDelayedFibs(n){
    var previousNum = 0;
    var nextNum = 1;
    var current = 0;
    var delay = 0; //Setting up the start delay to zero.
    (function fibLoop (n) {  
        //Setting up the delay for each number         
        setTimeout(function () {     
            current = previousNum;
            previousNum = nextNum;
            nextNum = current + nextNum;
            console.log(current);                       
           if (--n) fibLoop(n); //Looping to the next number
        }, delay);
        delay = 1000;
    })(n);
}  



   
    

}