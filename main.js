//Gets display and the class button from the HTML document
let display = document.getElementById('display');
const button = Array.from(document.getElementsByClassName('button'));
let resDisplay = document.getElementById('resentTimes');
let isStopped = false;
let seconds  = 0;
let minutes = 0;
let hours = 0;
let interval;

//Starts the timer
button[0].onclick = function(){ 
      
    if(!isStopped){
        isStopped = false;
        
        
        } else {
        isStopped = false}
            clearInterval(interval);
         interval = setInterval(function() {

            if(!isStopped){
                
                seconds=parseInt(seconds);
                minutes=parseInt(minutes);
                hours=parseInt(hours);
                seconds = seconds + 1;
                if(seconds == 60) {
                    minutes = minutes + 1;
                    seconds = 0;
                }
                if(minutes === 60) {
                    hours = hours + 1;
                    minutes = 0;
                }
                if(seconds < 10 || seconds === 0){
                    seconds = `0${seconds}`;
                }
                if(minutes < 10 || minutes === 0){
                    minutes = `0${minutes}`;
                }
                if(hours < 10 || hours === 0){
                    hours = `0${hours}`;
                } 
               
        display.innerHTML = `${hours}:${minutes}:${seconds}`;  
    
    } 
        }, 1000);   
}

//Stops the timer
button[1].onclick = function(){
    if(!isStopped){
    isStopped = true;
     }
}
    
//resets the timer    
button[2].onclick = function() {
    if (isStopped){
        seconds = 0;
        minutes = 0;
        hours = 0;
        display.innerHTML = `0${hours}:0${minutes}:0${seconds}`;
    }
}


