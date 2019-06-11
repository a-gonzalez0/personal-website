(function () {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        let today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
        h =  h % 12 || 12;
        let meridiem = h < 12 ? 'AM' : 'PM';
        document.getElementById('time').innerHTML = h + ":" + m + ":" + s + " " + meridiem;
        t = setTimeout(function () {
            startTime()
        }, 500);
    }

//     function checkDate() {
//     	var d = new Date();
//     	document.getElementById("date").innerHTML = d.toDateString();
//     }

    startTime();
    //checkDate();
})();
