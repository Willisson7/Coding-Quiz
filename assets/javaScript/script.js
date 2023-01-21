const startTime = .5;
var timer = startTime * 60;

const countDownEl = document.getElementById('countdown');

setInterval(updateCountDown, 1000);

function updateCountDown() {
    const minutes = Math.floor(timer / 60);
    let seconds = timer % 60;

    countDownEl.innerHTML = `${minutes}:${seconds}`;
    timer--;
     
    // if (timer == 0) {
    //     console.log("Times Up!");
    // // }
        if (timer === 0) {
            clearInterval(seconds);
        }
}
