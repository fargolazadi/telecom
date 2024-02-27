jQuery(document).ready(function() {
    "use strict";
    var $body = $('body'),
        $window = $(window),
        $document = $(document);
    $window.on("load", function() {
        var $preloader = $(".preloader");
        setTimeout(function () { 
            $preloader.delay(100).fadeOut("fast"); 
        }, 1000);
    });

    /*==============================
        counter js
    ==============================*/
    $('.count-number').counterUp({
        delay: 10,
        time: 1000
    });

    /*==============================
       video popup js
    ==============================*/
    var $video_popup = $('.play-button');
        $video_popup.magnificPopup({
            tClose: 'Close (Esc)',
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
    });

    /*============================== 
        magnificPopup js
    ==============================*/
    $('.full-view').on('click', function () {
        $(this).next().magnificPopup('open');
    });
    $('.slider-big, .style2-slider-big, .style4-slider-big, .slider-big-6, .slider-big-7').magnificPopup({
        delegate: 'a',
        type: 'image',
        showCloseBtn: true,
        closeBtnInside: false,
        midClick: true,
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    /*====================================
        header-sticky home-1 /home-2 js
    ====================================*/
    var lastScrollTop = 0;
    $(window).on('scroll', () => {
        var header = $('#stickyheader'),
        sticky = $(window).scrollTop();
        if (sticky >= 100) {
            header.addClass('sticky-header');
        } else {
            header.removeClass('sticky-header');
        }
    });

    lastScrollTop = scroll;

    // home-2 sticky-down //
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        scroll > lastScrollTop
            ? ($(".main-header").addClass("sticky-down"),
            $(".main-header").removeClass("sticky-up")): 

            lastScrollTop <= 100 ?

            ($(".main-header").removeClass("sticky"),
            $(".main-header").removeClass("sticky-down"),
            $(".main-header").removeClass("sticky-up")):

            ($(".main-header").addClass("sticky"),
            $(".main-header").removeClass("sticky-down"),
            $(".main-header").addClass("sticky-up")),

        (lastScrollTop = scroll);
    });

    /*====================================
        toggler-menu js
    ====================================*/
    $(".toggler-wrapper button.toggler-btn").on("click", function() {
        $("#mobile-menu, .main-menu-area, .header-bottom").addClass('active');
        $(".bg-screen").addClass('active');
        $("body").addClass('hidden');
    });
    $(".menu-close button.menu-close-btn").on("click", function() {
        $("#mobile-menu, .main-menu-area, .header-bottom").removeClass('active');
        $(".bg-screen").removeClass('active');
        $("body").removeClass('hidden');
    });

    /*==============================
        filter js
    ==============================*/
    $('button.filter-button').on('click', function () {
        $('.filter-sidebar').addClass("active");
        $('.screen-bg').addClass("active");
    });
    $('button.close-sidebar').on('click', function () {
        $('.filter-sidebar').removeClass("active");
        $('.screen-bg').removeClass("active");
    });

    /*====================================
        cart-drawer js
    ====================================*/
    $(".cart-wrapper a.js-cart-drawer, .bottom-menu-wrapper a.bottom-menu-cart, a.add-to-cart").on("click", function() {
        $("#cart-drawer").addClass('active');
        $(".bg-screen").addClass('active');
        $("body").addClass('hidden');
    });
    $(".drawer-close button.drawer-close-btn").on("click", function() {
        $("#cart-drawer").removeClass('active');
        $(".bg-screen").removeClass('active');
        $("body").removeClass('hidden');
    });

    /*====================================
        bg-screen js
    ====================================*/
    $(".bg-screen").on("click", function() {
        $(this).removeClass('active');
        $(".main-menu-area").removeClass('active');
        $("#cart-drawer").removeClass('active');
        $("body").removeClass('hidden');
        });
        $('#trigger-overlay').on('click', function(){
        $(".overlay").addClass('open'); 
    });

    $('.overlay-close').on('click', function(){
        $(".overlay").removeClass('open');  
    });

    /*====================================
        popup js
    ====================================*/
    $(window).on('load',function(){
        $('#mymodal').modal('show');
    });
    
    /*===================================
        product-short js
    ===================================*/
    $('.product-short a.short-title-lg').on('click', function () {
        if ($('#select-wrap').hasClass('active')) {
            $('#select-wrap').removeClass('active');
            $(this).removeClass('active');
        }
        else {
            $('#select-wrap').addClass('active');
            $(this).addClass('active');
        }
    });

    /*========================================== 
        Minus and Plus Btn js
    ==========================================*/
    $('.dec').on("click",function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    
    $('.inc').on("click",function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    /*============================== 
        quickview slider js
    ==============================*/
    var galleryThumbs = new Swiper(".gallery-thumbs", {
        loop: true,
        spaceBetween: 12,
        slidesPerView: 3,
        thumbs: {
            swiper: galleryTop,
        },
    });
    var galleryTop = new Swiper(".gallery-top", {
        loop: true,
        spaceBetween: 12,
        navigation: {
            nextEl: ".quick-next",
            prevEl: ".quick-prev",
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });
});

/*===================================
    range slider js
===================================*/
if($('#range1').length){
        var slider1 = document.getElementById("range1");
        var slider2 = document.getElementById("range2");
        var output1 = document.getElementById("demo1");
        var output2 = document.getElementById("demo2");
        output1.innerHTML = slider1.value;
        output2.innerHTML = slider2.value;

        slider1.oninput = function() {
            output1.innerHTML = slider1.value;
        }
        slider2.oninput = function() {
            output2.innerHTML = slider2.value;
        }
    }
/*==============================
    zoom js
==============================*/
function zoom(e){
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX/zoomer.offsetWidth*100
    y = offsetY/zoomer.offsetHeight*100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

/*====================================
    text-offer js
====================================*/
if($('.offer-ul .offer-li p').length){
    addEventListener('DOMContentLoaded', (event) => {
        var slides = document.querySelectorAll('.offer-ul .offer-li p');
        var currentSlide = 0;
        var slideInterval = setInterval(nextSlide,3000);
        function nextSlide(){
          slides[currentSlide].className = 'p';
          currentSlide = (currentSlide+1)%slides.length;
          slides[currentSlide].className = 'p active';
        }
    });
}

/*====================================
    text-replace js
====================================*/
if($('#replace').length){
    addEventListener('DOMContentLoaded', (event) => {
        var win = $(window),
            foo = $('#replace');
            foo.typer(['Bluetooth.','Wireless.','Wire.']);
            win.resize(function(){
            var fontSize = Math.max(Math.min(win.width() / (1 * 10), parseFloat(Number.POSITIVE_INFINITY)), parseFloat(Number.NEGATIVE_INFINITY));
        }).resize();
    });
}

/*==============================
    read-agree js
==============================*/
$('label.box-area, .read-agree').on('click', function () {
    if($('.cust-checkbox, .create-checkbox').is(':checked')) {
        $('.checkout, .create').removeClass('disabled');
    }
    else {
        $('.checkout, .create').addClass('disabled');
    }
});

/*===================================
    product-grid js
===================================*/
$('.list-change-view').on("click",function () {
    event.preventDefault();
    var data_grid = $(this).attr('data-grid-view');
    if ($('.special-product').hasClass('grid-1') || 
        $('.special-product').hasClass('grid-2') || 
        $('.special-product').hasClass('grid-3') || 
        $('.special-product').hasClass('grid-4')) 
    {
        $('.special-product').removeClass('grid-1');
        $('.special-product').removeClass('grid-2');
        $('.special-product').removeClass('grid-3');
        $('.special-product').removeClass('grid-4');
        $('.special-product').addClass('grid-'+data_grid);
    }
    else {
        $('.special-product').addClass('grid-'+data_grid);
    }
});
$('.list-change-view').on("click",function () {
    $('.list-change-view').removeClass('active');
    $(this).addClass('active');
}); 

// **************************************** home-5 ********************************************
/*====================================
   notification-close-btn js
====================================*/
$(".notification-close-btn").on("click", function() {
    $('#notification-bar').slideToggle();
});

