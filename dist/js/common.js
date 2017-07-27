'use strict';
if(!window.console) window.console = {};
if(!window.console.memory) window.console.memory = function() {};
if(!window.console.debug) window.console.debug = function() {};
if(!window.console.error) window.console.error = function() {};
if(!window.console.info) window.console.info = function() {};
if(!window.console.log) window.console.log = function() {};

// sticky footer
//-----------------------------------------------------------------------------
if(!Modernizr.flexbox) {
  (function() {
    var
      $pageWrapper = $('#page-wrapper'),
      $pageBody = $('#page-body'),
      noFlexboxStickyFooter = function() {
        $pageBody.height('auto');
        if($pageBody.height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
          $pageBody.height($(window).height() - $('#header').outerHeight() - $('#footer').outerHeight());
        } else {
          $pageWrapper.height('auto');
        }
      };
    $(window).on('load resize', noFlexboxStickyFooter);
  })();
}
if(ieDetector.ieVersion == 10 || ieDetector.ieVersion == 11) {
  (function(){
    var
      $pageWrapper = $('#page-wrapper'),
      $pageBody = $('#page-body'),
      ieFlexboxFix = function() {
        if($pageBody.addClass('flex-none').height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
          $pageWrapper.height($(window).height());
          $pageBody.removeClass('flex-none');
        } else {
          $pageWrapper.height('auto');
        }
      };
    ieFlexboxFix();
    $(window).on('load resize', ieFlexboxFix);
  })();
}

$(function() {

// placeholder
//-----------------------------------------------------------------------------
  $('input[placeholder], textarea[placeholder]').placeholder();

});


$(document).ready(function() {
    var drugsBtn = $(".js-drugsBtn");
    var drugsMenu = $(".js-drugsMenu");

    drugsBtn.mouseenter(function() {
        drugsMenu.css("display", "block");
        drugsBtn.addClass("active");
    });

    drugsMenu.mouseenter(function() {
        $(this).addClass("active");
    });

    drugsBtn.mouseleave(function() {
        var target = $(this);
        lostMause(target);
    })

    drugsMenu.mouseleave(function() {
        var target = $(this);
        lostMause(target);
    })

    var articlesBtn = $(".js-articlesBtn");
    var articlesMenu = $(".js-articlesMenu");

    articlesBtn.mouseenter(function() {
        articlesMenu.css("display", "block");a
        articlesBtn.addClass("active");
    });

    articlesMenu.mouseenter(function() {
        $(this).addClass("active");
    });

    articlesBtn.mouseleave(function() {
        var target = $(this);
        lostMause(target);
    })

    articlesMenu.mouseleave(function() {
        var target = $(this);
        lostMause(target);
    })

    var lostMause = function(target) {
        target.removeClass("active");
        if(!drugsBtn.hasClass("active") && !drugsMenu.hasClass("active")) {
            drugsMenu.css("display", "none");
        }
        if(!articlesBtn.hasClass("active") && !articlesMenu.hasClass("active")) {
            articlesMenu.css("display", "none");   
        }
    };

    $('.js-dignitySlider').slick({
        slidesToShow: 1,
        autoplay: true,
        fade: true,
        arrows: false,
        dots: true
    })

    $('.js-namesSlider').slick({
        slidesToShow: 5,
        arrows: false,
        swipe: false,
        centerMode: true,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })

    $('.js-noseSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        arrows: true,
        infinite: true,
        asNavFor: '.js-namesSlider',
        pauseOnHover: false
    })

    $('.js-drugsBtnMob').on('click', function(e) {
        e.preventDefault();
        $('.js-drugsMenu').slideToggle();
        $(this).toggleClass('active');
    })

    $('.js-menuBtn').on('click' ,function (e) {
        e.preventDefault();
        $('.js-mobMenuBlock').slideToggle();
    })

    $('.js-changeBtn').on('click', function (e) {
        e.preventDefault();
        $(this).css('display', 'none');
        $('.js-oldItem').css('display', 'none');
        $('.js-babeItem').css('display', 'block');
    })

    $('.js-backContent').on('click', function () {
        $('.js-changeBtn').css('display', 'block');
        $('.js-oldItem').css('display', 'block');
        $('.js-babeItem').css('display', 'none');
    })

    $('.js-upBtn').on('click', function() {
        var toTop = $(window).scrollTop();
        $('body').animate({scrollTop: 0 }, 1000);
        console.log(toTop)
    })
})
