/**
 * Created by Glalex on 27.03.2017.
 */

'use strict';

window.addEventListener('load', function() {
    var scrollPreviousPosition = 0,
        busyFlag = false,
        mobileViewWidth = 768,

        pageFirstLoadingFlag = true,
        isMobileViewFlag = true,
        topImageFirstTypingFlag = true;

    var sectionHeader = document.getElementById("header"),
        readMoreBtns = document.querySelectorAll(".read-more-btn");

    // ********************************************************************************
    resizeWindowHandler();
    scrollWindowHandler(); // initial call!!!
    // ********************************************************************************

    // ************************* FUNCTIONS ***************************

    // ****************************************************************

    // **********************  EVENT HANDLERS *************************

    function readMoreBtnHandler() {
        $(this.parentNode.querySelector(".for-read-more")).slideToggle();
        $(this).toggleText("Читать дальше", "Скрыть");
    }

    function resizeWindowHandler(event) {
        if (window.innerWidth < mobileViewWidth) {
            isMobileViewFlag = true;
        } else {
            isMobileViewFlag = false;
        }
    }

    function scrollWindowHandler(event) {
        var	tempOffset;

        // $.fn.extend({
        //     animateCss: function (animationName) {
        //         var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        //         this.addClass('animated ' + animationName).one(animationEnd, function() {
        //             $(this).removeClass('animated ' + animationName);
        //         });
        //     }
        // });

        if (window.innerWidth < mobileViewWidth) {
            tempOffset = window.innerHeight / 3;
        } else {
            tempOffset = window.innerHeight / 1.4;
        }

        var	currentPosition = document.body.scrollTop ?
            (document.body.scrollTop + tempOffset) :
            (document.documentElement.scrollTop + tempOffset);

        if (!isMobileViewFlag) {

        }

        scrollPreviousPosition = currentPosition;
    }

    // ************************************************************************************
    // ***************** REGISTER EVENT HANDLERS *******************
    var i = 0;

    for (i = 0; i < readMoreBtns.length; i++) {
        readMoreBtns[i].addEventListener('click', readMoreBtnHandler)
    }

    window.addEventListener('scroll', scrollWindowHandler);
    window.addEventListener('resize', resizeWindowHandler);

    // ************************************************************************************

    <!--PRELOADER !!!-->
    setTimeout(function () {
        $('#preloader').fadeOut('slow');
    }, 10);

    $('.owl-carousel.service-icons-container').owlCarousel({
        loop:true,
        margin:10,
        nav:false,

        autoplay:true,
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:4000, //Время смены слайда
        autoplayHoverPause:false,

        responsive:{
            0:{
                items:1
            },
            800:{
                items:2
            },
            1000:{
                items:3
            },
            1200:{
                items:4
            },
            1600:{
                items:6
            }
        }
    });

    $('.owl-carousel.service-images-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 1,

        autoplay:true,
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:4000, //Время смены слайда
        autoplayHoverPause:false

    });

    $(".owl-carousel.service-images-slider .owl-prev, " +
        ".owl-carousel.service-images-slider .owl-next").text("");

    $(".service-price-container .too-expensive-btn").click(function(event){
        // event.preventDefault();

        $(".expensive-block").slideToggle();
        $(this).toggleText("мне дорого", "скрыть");

        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false;

    });


    // $(".service-price-container .too-expensive-btn").click(function(event) {
    //     // event.preventDefault();
    //     // window.location.hash = "expensive-block";
    //     $(".expensive-btn").trigger("click"); // generate click on element
    // });

    // ANIMATION BLOCK
    if (!isMobileViewFlag) {

        // ****************************************************************************
        // *************    GENERAL ANIMATIONS FOR ALL PORTFOLIO PAGES    *************

        // $('.info-right').addClass("transparent").viewportChecker({
        //     classToAdd: 'animated fadeInRight',
        //     classToRemove: 'transparent',
        //     offset: 0,
        //     delay: 1000
        // });
        //
        // $('.info-left .info-left-title').addClass("transparent").viewportChecker({
        //     classToAdd: 'animated fadeInLeft',
        //     classToRemove: 'transparent',
        //     offset: 100,
        //     delay: 1000
        // });
    }

});