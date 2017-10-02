(function () {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
        h =  h % 12 || 12;
        document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
        t = setTimeout(function () {
            startTime()
        }, 500);
    }

    function checkMeridiem() {
    	var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
        var meridiem = h < 12 ? 'AM' : 'PM';
        document.getElementById("meridiem").innerHTML = meridiem;
    }

    function checkDate() {
    	var d = new Date();
    	document.getElementById("date").innerHTML = d.toDateString();
    }

    startTime();
    checkMeridiem();
    checkDate();
})();