(function () {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
        var meridiem = h < 12 ? 'AM' : 'PM';
        h =  h % 12 || 12;
        document.getElementById('time').innerHTML = h + ":" + m + ":" + s + " " + meridiem;
        t = setTimeout(function () {
            startTime()
        }, 500);
    }

//     function startDate() {
//     	var d = new Date();
//     	document.getElementById("date").innerHTML = d.toDateString();
//     }

    function setBgGreet() {
        let today = new Date(),
            h = today.getHours();
        if (h < 12) { 
            document.body.style.backgroundImage = "url('../img/morning.jpg')";
            greet.textContent = "Good Morning";
        }
        else if (h < 18) { 
            document.body.style.backgroundImage = "url('../img/afternoon.png')";
            greet.textContent = "Good Afternoon";
        }
        else { 
            document.body.style.backgroundImage = "url('../img/evening.jpg')";
            greet.textContent = "Good Evening";
            document.body.style.color = "white";
        }
    }
    
    startTime();
//     startDate();
    setBgGreet();
})();
