$(document).ready(function () {


    $('.main-slider__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="prev-left"></button>',
        nextArrow: '<button class="prev-right"></button>',
        dots: true
    });


   $('button[data-tab]').click(function () {
        var target = $(this).attr('data-tab');
        $('[data-tab]').removeClass('active');
        $('section[data-tab="' + target + '"]').addClass('active');
        $(this).toggleClass('active');
        $('.novelty-list').slick('refresh');
        $('.news-slider').slick('refresh');
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
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 577,
                settings: {
                    //dots: true,
                    slidesToShow: 2,
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
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 577,
                settings: {
                    //dots: true,
                    slidesToShow: 2,
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

$('.show-vacan').click(function () {
        $(this).parent('.vacancy-item').addClass('active');
    });

$('.hide-vacan').click(function () {
        $(this).parent('.vacancy-item').removeClass('active');
    });

$('.servises-about__form-file').styler({
         fileBrowse: 'Прикрепить файл',
        filePlaceholder: 'Название файла.jpg',
        singleSelectzIndex: '999',
        onSelectOpened: function () {
           // к открытому селекту добавляется красная обводка
            $(this).css('box-shadow: 0px 15px 31px rgba(0, 0, 0, 0.1);');
        }
    });

$('.header__menu-toggle').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('header__menu-toggle--active');
      $('.header-menu').toggleClass('active');
    });

  });