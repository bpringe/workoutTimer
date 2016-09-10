$(document).ready(function() {
    var secondsElement = $('#seconds');
    var minutesElement = $('#minutes');
    var intervalSecondsElement = $('#intervalSeconds');
    var intervalMinutesElement = $('#intervalMinutes');
    var totalSeconds = 0;
    var seconds = 0;
    var minutes = 0;
    var secondsDisplay;
    var minutesDisplay;
    var intervalSeconds = 0;
    var censoredBeep_audio = new Audio('censored_beep.mp3');

    $('#startTimerButton').click(startTimer);

    function startTimer() {
        intervalSeconds = Number(intervalMinutesElement.val() * 60)
            + Number(intervalSecondsElement.val());

        if (intervalSeconds === 0) {
            return;
        }

        setInterval(count, 1000);
    }

    function count() {
        totalSeconds += 1;

        if (totalSeconds % intervalSeconds === 0) {
            censoredBeep_audio.play();
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