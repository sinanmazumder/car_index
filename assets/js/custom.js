// nav fixed 
jQuery("document").ready(function () {
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 30) {
            jQuery('.main-menu').addClass('fixed-top');
        } else {
            jQuery('.main-menu').removeClass('fixed-top');
        }
    });
});


//testimonial carousel
jQuery('document').ready(function () {
    jQuery('.banner .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        animateOut: 'fadeOut',
        nav: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        dots: false,
        smartSpeed: 2000,
        autoplay: true,
        autoplayTimeout: 4000,
        items: 1
    });
});


/* video popup */
jQuery(function () {
    jQuery("#video").videoPopup({
        autoplay: 1,
        controlsColor: 'blue',
        showVideoInformations: 0,
        width: 1000,
        customOptions: {
            rel: 0,
            end: 120
        }
    });
});




// parallax image
jQuery('document').ready(function () {
    $('#play-video').on('click', function (e) {
        e.preventDefault();
        $('#video-overlay').addClass('open');
        $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
    });

    $('.video-overlay, .video-overlay-close').on('click', function (e) {
        e.preventDefault();
        close_video();
    });

    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            close_video();
        }
    });

    function close_video() {
        $('.video-overlay.open').removeClass('open').find('iframe').remove();
    };
});



//testimonial carousel
jQuery('document').ready(function () {
    jQuery('.testimonial .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        dots: false,
        smartSpeed: 2000,
        items: 1
    });
});


// Scroll top button //

jQuery("document").ready(function () {
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 200) {
            jQuery(".scroll-top").fadeIn();
        } else {
            jQuery(".scroll-top").fadeOut();
        }
    });
    jQuery(".scroll-top").click(function () {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 700);
    });
});

jQuery('document').ready(function () {
    jQuery('.search').click(function () {
        jQuery('.search-popup').slideDown();
    });
    jQuery('.cross').click(function () {
        jQuery('.search-popup').slideUp();
    });
    
    $('.toggle-icon').click(function(){
        $('.menu-item').slideToggle();
    });
    $('.i11').click(function(){
        $('.dropdown-menu').slideToggle();
    });
    $('.dropdown-menu li span').click(function(){
        $('.submenu').slideToggle();
    });
});


// preloader 
jQuery(window).on('load', function () {
    jQuery('.preloader').fadeOut();
    jQuery('.preloader').delay(1350).fadeOut('slow');
    jQuery('body').delay(1350).css({
        'overflow': 'visible'
    });
});


wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function (box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();
