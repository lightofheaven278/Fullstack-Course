window.onload = function () {
    let minutes = 0;
    let seconds = 0;
    let tens = 0;
    let increaseMinute = document.getElementById("minute");
    let increaseSecond = document.getElementById("second");
    let increaseTen = document.getElementById("ten");
    let buttonStart = document.getElementById("start");
    let buttonStop = document.getElementById("stop");
    let buttonReset = document.getElementById("reset");
    let Interval;

    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(Interval);
    }

    buttonReset.onclick = function () {
        clearInterval(Interval);
        minutes = "00";
        seconds = "00";
        tens = "00";
        increaseMinute.innerHTML = minutes;
        increaseSecond.innerHTML = seconds;
        increaseTen.innerHTML = tens;
    }

    function startTimer() {
        tens++;
        if (tens < 9) {
            increaseTen.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            increaseTen.innerHTML = tens;
        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            increaseSecond.innerHTML = "0" + seconds;
            tens = 0;
            increaseTen.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            increaseSecond.innerHTML = seconds;
        }

        if (seconds > 59) {
            minutes++;
            increaseMinute.innerHTML = "0" + minutes;
            seconds = 0;
            tens = 0;
            increaseSecond.innerHTML = "0" + 0;
            increaseTen.innerHTML = "0" + 0;
        }

        if (minutes > 9) {
            increaseMinute.innerHTML = minutes;
        }
    }
}