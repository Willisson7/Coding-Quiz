
var timeEl = document.querySelector("#countdown")
var secondsLeft = 10;

function setTimer() {
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left!";
        
        if(secondsLeft === 0) {
            clearInterval(timerInterval)};
        }, 1000); 
    }

    setTimer();
