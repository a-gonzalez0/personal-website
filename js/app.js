var main = function() {
    $('.dropdown-toggle').click(function() {
        $('.dropdown-menu').toggle();
    });
};

$(document).ready(function(){
    // Navbar color change while scrolling
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
	
    window.sr = ScrollReveal();
        sr.reveal('.fixed-top', {
          duration: 2000,
          origin:'left'
        });
        sr.reveal('.showcase-left', {
          duration: 2000,
          origin:'top',
          distance:'300px'
        });
        sr.reveal('.showcase-right', {
          duration: 2000,
          origin:'right',
          distance:'300px'
        });
        sr.reveal('.showcase-btn', {
          duration: 2000,
          delay: 2000,
          origin:'bottom'
        });
        sr.reveal('#testimonial div', {
          duration: 2000,
          origin:'bottom'
        });
        sr.reveal('.info-left', {
          duration: 2000,
          origin:'left',
          distance:'300px',
          viewFactor: 0.2
        });
        sr.reveal('.info-right', {
          duration: 2000,
          origin:'right',
          distance:'300px',
          viewFactor: 0.2
        });
        sr.reveal('.info-bottom', {
          duration: 2000,
          origin:'bottom',
          distance:'300px',
          viewFactor: 0.2
        });
    
    // Modal 
//     $('#myModal').on('show.bs.modal', function (e) {
//             var image = $(e.relatedTarget).attr('src');
//             $(".img-fluid").attr("src", image);
//     });
    
    // Add scrollspy to <body>
    $('body').scrollspy({target: "#myNavbar", offset: 50});   
    
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

$(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");               
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
        $navbar.collapse('hide');
    }
});

// (function () {
//     function checkTime(i) {
//         return (i < 10) ? "0" + i : i;
//     }

//     function startTime() {
//         var today = new Date(),
//             h = checkTime(today.getHours()),
//             m = checkTime(today.getMinutes()),
//             s = checkTime(today.getSeconds());
//         h =  h % 12 || 12;
//         document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
//         t = setTimeout(function () {
//             startTime()
//         }, 500);
//     }

//     function checkMeridiem() {
//     	var today = new Date(),
//             h = checkTime(today.getHours()),
//             m = checkTime(today.getMinutes()),
//             s = checkTime(today.getSeconds());
//         var meridiem = h < 12 ? 'AM' : 'PM';
//         document.getElementById("meridiem").innerHTML = meridiem;
//     }

//     function checkDate() {
//     	var d = new Date();
//     	document.getElementById("date").innerHTML = d.toDateString();
//     }

//     startTime();
//     checkMeridiem();
//     checkDate();
// })();

$(document).ready(main);
