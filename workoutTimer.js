$(document).ready(function() {
    var secondsElement = $('#seconds');
    var minutesElement = $('#minutes');
    var intervalSecondsElement = $('#intervalSeconds');
    var intervalMinutesElement = $('#intervalMinutes');
    var startButton = $('#startButton');
    var stopButton = $('#stopButton');
    var clearButton = $('#clearButton');
    var totalSeconds = 0;
    var seconds = 0;
    var minutes = 0;
    var secondsDisplay;
    var minutesDisplay;
    var intervalSeconds = 0;
    var intervalSound = new Audio('sounds/milton_stapler.mp3');
    var interval;

    startButton.click(startTimer);
    stopButton.click(stopTimer);
    clearButton.click(clearTimer);

    function startTimer() {
        intervalSeconds = Number(intervalMinutesElement.val() * 60)
            + Number(intervalSecondsElement.val());

        if (intervalSeconds === 0) {
            return;
        }

        startButton.attr('disabled', 'disabled');

        interval = setInterval(count, 1000);
    }

    function stopTimer() {
        clearInterval(interval);
        startButton.removeAttr('disabled');
    }


    function clearTimer() {
        totalSeconds = 0;
        seconds = 0;
        minutes = 0;
        displayClock();
    }

    function count() {
        totalSeconds += 1;

        if (totalSeconds % intervalSeconds === 0) {
            intervalSound.play();
        }

        seconds = totalSeconds % 60;

        if (seconds === 0) {
            minutes += 1;
        }

        displayClock();
    }

    function displayClock() {
        secondsDisplay = (seconds < 10) ? '0' + seconds : seconds;
        minutesDisplay = (minutes < 10) ? '0' + minutes : minutes;
        secondsElement.text(secondsDisplay);
        minutesElement.text(minutesDisplay);
    }
});