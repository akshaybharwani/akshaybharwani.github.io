//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


  //For hiding the navbar-brand and navbar background color -->
         $(".navName").hide();//hide your div initially
                    $(".navbar-default").removeClass('navbarBG');
                    var topOfOthDiv = $("#work").offset().top - 100;
                   $(window).scroll(function() {
                       if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
                           $(".navName").show(); //reached the desired point -- show div
                           $(".navbar-default").addClass('navbarBG');
                       }
                       else {
                           $(".navName").hide();
                           $(".navbar-default").removeClass('navbarBG');
                       }
                    });

    $(function() {
    $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
});