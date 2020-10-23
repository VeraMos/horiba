$(document).ready(function () {


    $('.main-slider__list').slick({
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


  });