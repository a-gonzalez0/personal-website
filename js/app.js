var main = function() {
    $('.dropdown-toggle').click(function() {
        $('.dropdown-menu').toggle();
    });
    
    $('.arrow-next').click(function() {
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();
        
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();
        
        if(nextSlide.length == 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }
        
        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');
        
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    });
    
    $('.arrow-prev').click(function() {
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();
        
        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();
        
        if(prevSlide.length == 0) {
            prevSlide = $('.slide').last();
            prevDot = $('.dot').last();
        }
        
        currentSlide.fadeOut(600).removeClass('active-slide');
        prevSlide.fadeIn(600).addClass('active-slide');
        
        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
    });
};

$(document).ready(function(){
    // Modal 
    $('#myModal').on('show.bs.modal', function (e) {
            var image = $(e.relatedTarget).attr('src');
            $(".img-responsive").attr("src", image);
    });
    
    // Add scrollspy to <body>
    $('body').scrollspy({ target: '#myNavbar' });

    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
   
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    });
});

function myMap() {
  var mapCanvas = document.getElementById("map");
  var myCenter = new google.maps.LatLng(40.7128,74.0059); 
  var mapOptions = {center: myCenter, zoom: 5};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.BOUNCE
  });
  marker.setMap(map);
}

$(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");               
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
        $navbar.collapse('hide');
    }
});

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

$(document).ready(main);
