$(document).ready(function(){
    //Navbar color change while scrolling
    $(document).scroll(function () {
        var $nav = $('.navbar-fixed-top');
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
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');
	
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
          delay: 2000,
          origin:'bottom'
        });
        sr.reveal('#testimonial div', {
          duration: 2000,
          origin:'bottom'
        });
        sr.reveal('.info-left', {
          duration: 2000,
          origin:'bottom'
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
    
    // Add scrollspy to <body>
    $('body').scrollspy({ target: '#myNavbar' })  
    
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
	
$(document).ready(main);
