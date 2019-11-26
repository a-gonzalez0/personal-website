$(document).ready(function(){
    //Navbar color change while scrolling
    $(document).scroll(function () {
        var $nav = $('.fixed-top');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
	
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
	
    $(document).click(function(e) {
	if (!$(e.target).is('a')) {
	    $('.collapse').collapse('hide');	    
	}
    });
	
    $('.carousel').carousel();
	
    window.sr = ScrollReveal();
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
        delay: 1500,
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
        distance:'150px',
        viewFactor: 0.1
    });
    
    sr.reveal('.info-bottom-2', {
        duration: 2000,
        origin:'bottom',
        distance:'150px',
        viewFactor: 0.1,
	delay: 150
    });

    sr.reveal('.info-bottom-3', {
        duration: 2000,
        origin:'bottom',
        distance:'150px',
        viewFactor: 0.1, 
	delay: 300
    });
	
    // Add scrollspy to <body>
    $('body').scrollspy({ target: '#myNavbar' })  
    
    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {
	
	if (this.hash !== "") {
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
	} // End if	
    });
});

$(document).ready(main);
