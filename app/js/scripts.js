$(document).ready(function () {


    $('.main-slider__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="prev-left"></button>',
        nextArrow: '<button class="prev-right"></button>',
        //dots: true
    });


   $('button[data-tab]').click(function () {
        var target = $(this).attr('data-tab');
        $('[data-tab]').removeClass('active');
        $('section[data-tab="' + target + '"]').addClass('active');
        $(this).toggleClass('active');
    });

   $('.novelty-list').slick({
        //dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="prev-left__n"></button>',
        nextArrow: '<button class="prev-right__n"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    //dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true,                
                }
            },
            {
                breakpoint: 320,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true,
                    prevArrow: false,
                    nextArrow: false
                }
            }
        ]
    });

    $('.news-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="prev-left__news"></button>',
        nextArrow: '<button class="prev-right__news"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    //dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true, 
                }
            },
            {
                breakpoint: 320,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true,
                    prevArrow: false,
                    nextArrow: false
                }
            }
        ]
    });


$('.header-search__btn').click(function () {
        $('.search-block').slideToggle();
    });

$('.search-close').click(function () {
        $('.search-block').hide();
    });

  });