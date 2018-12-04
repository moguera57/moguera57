$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 50) {
          $('body').addClass('bg-change')
          $('.init-title').addClass('hidden')
          $('.scroll-title').removeClass('hidden')
          $('.menu-item').addClass('scroll-color-change')
          $('.sticky-nav').addClass('scroll-menu-bg')
        }
       if ($(this).scrollTop() < 50) {
          $('body').removeClass('bg-change')
          $('.init-title').removeClass('hidden')
          $('.scroll-title').addClass('hidden')
          $('.menu-item').removeClass('scroll-color-change')
          $('.sticky-nav').removeClass('scroll-menu-bg')
        }
    });
 });
 