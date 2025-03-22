
       
        let timerDisplay = document.querySelector('.timer');
        let startButton = document.querySelector('.start');
        let stopButton = document.querySelector('.stop');
        let resetButton = document.querySelector('.reset');

        let startTime, updatedTime, difference;
        let interval;
        let running = false;

        function startTimer() {
            if (!running) {
                startTime = new Date().getTime() - (difference || 0);
                interval = setInterval(updateTime, 10);
                running = true;
            }
        }

        function stopTimer() {
            clearInterval(interval);
            running = false;
        }

        function resetTimer() {
            clearInterval(interval);
            running = false;
            difference = 0;
            timerDisplay.textContent = "00:00:00";
        }

        function updateTime() {
            updatedTime = new Date().getTime();
            difference = updatedTime - startTime;

            let milliseconds = Math.floor((difference % 1000) / 10);
            let seconds = Math.floor((difference / 1000) % 60);
            let minutes = Math.floor((difference / (1000 * 60)) % 60);

            milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            minutes = minutes < 10 ? "0" + minutes : minutes;

            timerDisplay.textContent = `${minutes}:${seconds}:${milliseconds}`;
        }

        startButton.addEventListener('click', startTimer);
        stopButton.addEventListener('click', stopTimer);
        resetButton.addEventListener('click', resetTimer);
   