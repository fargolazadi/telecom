jQuery(document).ready(function() {
    "use strict";
    /*====================================
        deal-day clock js
    ====================================*/
        var deadline = new Date(Date.parse(new Date()) + 520 * 80 * 60 * 60 * 1000);
            initializeClock('clock1', deadline);
        var deadline = new Date(Date.parse(new Date()) + 620 * 80 * 60 * 60 * 1000);
            initializeClock('clock2', deadline);
        var deadline = new Date(Date.parse(new Date()) + 720 * 80 * 60 * 60 * 1000);
            initializeClock('clock3', deadline);
        var deadline = new Date(Date.parse(new Date()) + 420 * 80 * 60 * 60 * 1000);
            initializeClock('clock4', deadline);
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 60));
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
    }
    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        if(clock != null){
          var daysSpan = clock.querySelector('.days');
          var hoursSpan = clock.querySelector('.hours');
          var minutesSpan = clock.querySelector('.minutes');
          var secondsSpan = clock.querySelector('.seconds');

          function updateClock() {
            var t = getTimeRemaining(endtime);
            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
              clearInterval(timeinterval);
            }
          }

          updateClock();
          var timeinterval = setInterval(updateClock, 1000);
        }
      }
      
    /*====================================
        home-slider js
    ====================================*/
    var swiper = new Swiper('.swiper#home-slider', {
        loop: false,
        rewind: true,
        slidesPerView: 1,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        speed: 500,
        effect: 'fade',

        navigation: {
            prevEl: '.swiper-prev-home-slider',
            nextEl: '.swiper-next-home-slider'
        },
        pagination: {
            el: ".swiper-pagination-home-slider",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }
    });

    /*====================================
        home3 / home-5 slider js
    ====================================*/
    $('#homeslider, #homeslider5').owlCarousel({
        loop: false,
        items: 1,
        rtl: true,
        nav: true,
        navText : ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: true,
        responsive: {
        }
    });
 
    /*====================================
        home4-slider js
    ====================================*/
     $('#homeslider4').owlCarousel({
        loop: false,
        items: 1,
        rtl: true,
        nav: false,
        navText : ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: false,
        responsive: {
        }
    });

    /*====================================
      home-1 category-slider js
    ====================================*/
    var swiper = new Swiper('.swiper#cat-slider', {
        loop: false,
        slidesPerView: 4,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-cat',
            nextEl: '.swiper-next-cat'
        },
        pagination: {
            el: ".swiper-pagination-cat",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================
        home-2 category-slider  js
    ====================================*/
    var swiper = new Swiper('.swiper#category-slider', {
        loop: false,
        slidesPerView: 6,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-category',
            nextEl: '.swiper-next-category'
        },
        pagination: {
            el: ".swiper-pagination-category",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            0: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 5,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 5,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 6,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 6,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================
        tab-product js
    ====================================*/
    // new-product tab js
    var swiper = new Swiper('.swiper#new-product', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-new',
            nextEl: '.swiper-next-new'
        },
        pagination: {
            el: ".swiper-pagination-new",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // best-product tab js
    var swiper = new Swiper('.swiper#best-product', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-best',
            nextEl: '.swiper-next-best'
        },
        pagination: {
            el: ".swiper-pagination-best",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // feature-product tab js
    var swiper = new Swiper('.swiper#feature-product', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-feature',
            nextEl: '.swiper-next-feature'
        },
        pagination: {
            el: ".swiper-pagination-feature",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================
       home-2 tab-product js
    ====================================*/
    // new-product tab js
    var swiper = new Swiper('.swiper#new-product1', {
        loop: false,
        rewind: true,
        slidesPerView: 5,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-new',
            nextEl: '.swiper-next-new'
        },
        pagination: {
            el: ".swiper-pagination-new",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 5,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // best-product tab js
    var swiper = new Swiper('.swiper#best-product1', {
        loop: false,
        rewind: true,
        slidesPerView: 5,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-best',
            nextEl: '.swiper-next-best'
        },
        pagination: {
            el: ".swiper-pagination-best",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 5,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // feature-product tab js
    var swiper = new Swiper('.swiper#feature-product1', {
        loop: false,
        rewind: true,
        slidesPerView: 5,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-feature',
            nextEl: '.swiper-next-feature'
        },
        pagination: {
            el: ".swiper-pagination-feature",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 5,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================
        special-product js
    ====================================*/
    var swiper = new Swiper('.swiper#special-product', {
        loop: false,
        slidesPerView: 4,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-special',
            nextEl: '.swiper-next-special'
        },
        pagination: {
            el: ".swiper-pagination-special",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================
       home-2 special-product  js
    ====================================*/
    var swiper = new Swiper('.swiper#special-product1', {
        loop: false,
        slidesPerView: 5,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-special',
            nextEl: '.swiper-next-special'
        },
        pagination: {
            el: ".swiper-pagination-special",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 5,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================  
        home-4 product details 
     ====================================*/
    $('.home-pro-info-slider').owlCarousel({
        loop: true,
        margin: 12,
        rtl: true,
        nav: false,
        navText: ['<i class="ti-arrow-left"></i>','<i class="ti-arrow-right"></i>'],
        dots: false,
        responsive:{
          0:{
            items:3
          },
          600:{
            items:4
          },
          1000:{
            items:4
          }
        }
    });
    $('.home-product-info .nav-item .nav-link').on( "click", function() {
        $('.home-product-info .nav-item .nav-link').removeClass('active');
        $(this).addClass('active');
    });

    /*====================================
        day-deal js
    ====================================*/
    var swiper = new Swiper('.swiper#deal-slider', {
        loop: false,
        slidesPerView: 2,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-deal',
            nextEl: '.swiper-next-deal'
        },
        pagination: {
            el: ".swiper-pagination-deal",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================
        home-5 blog js
    ====================================*/
    $('#blog-slider, #blog5').owlCarousel({
        loop: false,
        items: 3,
        margin: 30,
        rtl: true,
        nav: false,
        navText : ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: true,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 1,
                margin: 12
            },
            640 : {
                items: 2,
                margin: 12
            },
            768 : {
                items: 2,
                margin: 30
            },
            979 : {
                items: 2,
                margin: 30
            },
            1199 : {
                items: 3,
                margin: 30
            }
        }
    });

    /*====================================
       home-3 blog js 
    ====================================*/
    $('#blog-slider3').owlCarousel({
        loop: false,
        items: 4,
        margin: 30,
        rtl: true,
        nav: true,
        navText : ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: false,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 1,
                margin: 12
            },
            640 : {
                items: 2,
                margin: 12
            },
            768 : {
                items: 2,
                margin: 30
            },
            979 : {
                items: 3,
                margin: 30
            },
            1199 : {
                items: 4,
                margin: 30
            }
        }
    });

    /*====================================
        home-4 blog js 
    ====================================*/
    $('#blog-slider4').owlCarousel({
        loop: false,
        items: 2,
        margin: 30,
        rtl: true,
        nav: true,
        navText : ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: true,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 1,
                margin: 12
            },
            640 : {
                items: 2,
                margin: 12
            },
            768 : {
                items: 2,
                margin: 30
            },
            979 : {
                items: 2,
                margin: 30
            },
            1199 : {
                items: 2,
                margin: 30
            }
        }
    });

    /*====================================
        brand-logo js
    ====================================*/
    $('#brand-logo').owlCarousel({
        loop: true,
        items: 5,
        margin: 30,
        nav: false,
        rtl: true,
        navText : ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: false,
        responsive: {
            0 : {
                items: 2,
                margin: 12
            },
            479 : {
                items: 2,
                margin: 12
            },
            540 : {
                items: 3,
                margin: 12
            },
            640 : {
                items: 3,
                margin: 12
            },
            768 : {
                items: 3,
                margin: 30
            },
            979 : {
                items: 4,
                margin: 30
            },
            1199 : {
                items: 5,
                margin: 30
            }
        }
    });

    /*====================================
        home-5 brand-logo js
    ====================================*/
    $('#brand-logo5').owlCarousel({
        loop: true,
        items: 5,
        margin: 30,
        rtl: true,
        nav: false,
        navText : ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: false,
        responsive: {
            0 : {
                items: 2,
                margin: 12
            },
            479 : {
                items: 2,
                margin: 12
            },
            540 : {
                items: 2,
                margin: 12
            },
            640 : {
                items: 3,
                margin: 12
            },
            768 : {
                items: 3,
                margin: 30
            },
            979 : {
                items: 4,
                margin: 30
            },
            1199 : {
                items: 5,
                margin: 30
            }
        }
    });

    /*====================================
       home-5 test-slider 
    ====================================*/
    $('#test-slider').owlCarousel({
        loop: true,
        rewind: true,
        items: 1,
        margin: 0,
        rtl: true,
        nav: false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        singleItem : true,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 5000,
        responsive:{
        }     
    });

    /*====================================
       home-1 / home-5 product-style  js
    ====================================*/
    $('.slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        rtl: true,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.slider-small',
        adaptiveHeight: true,
    });
    $('.slider-small').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        rtl: true,
        prevArrow: '<button class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="bi bi-chevron-right"></i></button>',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        asNavFor: '.slider-big',
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 3
            }
        }]
    });

    /*==================================== 
        home-2 product-slider-bg-small js
    ====================================*/
    $('.style2-slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        rtl: true,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.style2-slider-small',
        adaptiveHeight: true,
    });
    $('.style2-slider-small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="bi bi-chevron-right"></i></button>',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        asNavFor: '.style2-slider-big',
        vertical: true,
        verticalSwiping: true,
        responsive: [
        {
            breakpoint: 480,
            settings: {
                centerPadding: '10px',
                vertical: false,
                rtl: true,
                verticalSwiping: false
            }
        }
        ]
    });

    /*====================================
        home-3 pro-slider js
    ====================================*/
    var swiper = new Swiper('.swiper#pro-slider',{
        loop: true,
        slidesPerView: 3,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-pro-style3',
            nextEl: '.swiper-next-pro-style3'
        },
        pagination: {
            el: ".swiper-pagination-pro-style3",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================
       home-5  product-slider-small
    ====================================*/
    $('.style5-slider-small').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        rtl: true,
        prevArrow: '<button class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="bi bi-chevron-right"></i></button>',
        dots: true,
        focusOnSelect: true,
    });
});

   
