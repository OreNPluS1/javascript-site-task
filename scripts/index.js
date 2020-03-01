const timeDate = function updateTimeAndDate() {
    // get current time
    let currentTime = new Date().toLocaleString();

    // set the content in the page
    document.getElementById('time').innerHTML = currentTime;

    // call the function every 1000ms
    setTimeout(timeDate);
};

timeDate();