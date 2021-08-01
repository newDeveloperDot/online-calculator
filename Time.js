let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let seconds = document.getElementById("seconds");

var clock = setInterval(
    function time()
    {
        var data_now = new Date();
        var hr = data_now.getHours();
        var min = data_now.getMinutes();
        var sec = data_now.getSeconds();
        if (hr < 10) {
            hr = "0" + hr;
        }
        if (min < 10) 
        {
            min = "0" + min;
        }
        if (sec < 10) 
        {
            sec = "0" + sec;
        }
        hour.textContent = hr;
        minute.textContent = min;
        seconds.textContent = sec;
    },1000
)