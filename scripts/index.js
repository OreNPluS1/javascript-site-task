const timeDate = function updateTimeAndDate() {
    // Get current time
    let currentTime = new Date().toLocaleString();

    // Set the content in the page
    document.getElementById('time').innerHTML = currentTime;

    // Call the function every 1000ms
    setTimeout(timeDate);
};

timeDate();