// -----------------------------

//   js index
/* =================== */
/*  
    ## preloader
    ## Counter Up
    ## sticky
    ## SmartMenu Nav
    ## scroll-up
    ## Countdown 
    ## Smooth scroll
    ## WOW
    ## AOS
    ## Search Box JS
    ## Sidepanel JS
    ## Quantity Increment Decrement JS
    ## owl carousel
    ## Youtube Player JS
    ## Contact Form
    ## Cart Box
    ## Shuffle JS
    ## Skill Bar
    ## Product Gallery
    

*/
// -----------------------------
(function($) {
    "use strict";



    

    /*-----------------
    sticky
    -----------------*/
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 85) {
            $('header').addClass('navbar-fixed-top');
        } else {
            $('header').removeClass('navbar-fixed-top');
        }
    });

    
    /*----------------------------
     SmartMenu Nav
    ------------------------------ */
    $('#QnikoMenu').smartmenus({
        subMenusSubOffsetX: 6,
        subMenusSubOffsetY: -8
    });

    $(function() {
        var $mainMenuState = $('#QnikoMenu-state');
        if ($mainMenuState.length) {
            // animate mobile menu
            $mainMenuState.change(function(e) {
                var $menu = $('#QnikoMenu');
                if (this.checked) {
                    $menu.hide().slideDown(250, function() {
                        $menu.css('display', '');
                    });
                } else {
                    $menu.show().slideUp(250, function() {
                        $menu.css('display', '');
                    });
                }
            });
            // hide mobile menu beforeunload
            $(window).on('beforeunload unload', function() {
                if ($mainMenuState[0].checked) {
                    $mainMenuState[0].click();
                }
            });
        }
    });

    
    
    /*-----------------
    scroll-up
    -----------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-arrow-up" aria-hidden="true"></i>',
        easingType: 'linear',
        scrollSpeed: 1500,
        animation: 'fade'
    });


    
    /**================================ 
    Countdown 
    ================================**/
    $('.countdown').countdown('2020/12/1', function(event) {
        $('#cday').html(event.strftime('%D <span id="clabel"><br>Days</span>'));
        $('#chour').html(event.strftime('%-H <span id="clabel"><br>Hours</span>'));
        $('#cminute').html(event.strftime('%M <span id="clabel"><br>Minutes</span>'));
        $('#csec').html(event.strftime('%S <span id="clabel"><br>Seconds</span>'));
    });

    /*---------------------
    Smooth scroll
    --------------------- */
    $('.smoothscroll').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top - 80
        }, 1200);
    });
    
    /*---------------------
    WOW
    --------------------- */
    if ($('.wow').length > 0) {
        var wowSel = 'wow';
        var wow = new WOW({
            boxClass: wowSel,
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            callback: function(box) {

            },
            scrollContainer: null
        });
        wow.init();
    }
    /*---------------------
    AOS
    --------------------- */
    // AOS.init();
    if ($('[data-aos]').length > 0) {

        AOS.init({
            //Global settings:
            // debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
          
            //Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            // once: false, // whether animation should happen only once - while scrolling down
            mirror: true, // whether elements should animate out while scrolling past them
          
         });

    }
    
 /*---------------------
    Search Box JS
    --------------------- */
   

 
    

   
    

    /*---------------------
    owl carousel
    --------------------- */

    
    // Testimonial Carousel
    function testimonial_carousel() {
        var owl = $(".place-carousall");
        owl.owlCarousel({
            loop: true,
            margin: 40,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='flaticon-left' style='color: #22d357;'></i>", "<i class='flaticon-right' style='color: #22d357;'></i>"],
            nav: true,
            smartSpeed: 2000,
            dots: false,
            autoplay: false,
            autoplayTimeout: 2000,
            center: false,
            responsive: {
                0:{
                    items:1
                },
                576:{
                    items:2
                },
                768:{
                    items:3
                },
                992:{
                    items:3
                },
                1200:{
                    items:4
                }
                
            }
        });
    }
    testimonial_carousel();
   
   
    


}(jQuery));












    