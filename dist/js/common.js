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

    drugsBtn.mouseenter(function() {
        $(".js-drugsMenu").css("display", "block");
        drugsBtn.addClass("active");
    });

    drugsBtn.mouseleave(function() {
        $(this).find(".js-drugsMenu").css("display", "none");
    })


    var articlesBtn = $(".js-articlesBtn");

    articlesBtn.mouseenter(function() {
        $(this).find(".js-articlesMenu").css("display", "block");
        $(this).addClass("active");
    });

    articlesBtn.mouseleave(function() {
        $(this).find(".js-articlesMenu").css("display", "none");
        $(this).removeClass('active');
    })


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

    $('.js-bannerBtn').on('click', function(e) {
        e.preventDefault();
        $('.js-banner').addClass('hiddenBanner');
    })

    $('.js-rotatitonZone').on('click', function(e) {
        if($(e.target).closest('.js-rotationFalse').length == 0){
            var elem1 = $('.js-drug1'),
                elem2 = $('.js-drug2');
            if(elem1.hasClass('js-frontItem')) {
                $(this).addClass('js-pointerFalse');
                elem1.addClass('backLeft');
                elem1.removeClass('frontCenter');
                elem1.removeClass('js-activeLabels');
                elem2.removeClass('backTop');
                elem2.addClass('frontRight');
                elem2.removeClass('js-activeCapacity')
                setTimeout(function() {
                    elem1.removeClass('backLeft');
                    elem1.removeClass('js-frontItem');
                    elem1.addClass('backTop');
                    elem2.removeClass('frontRight');
                    elem2.addClass('frontCenter');
                    elem2.addClass('js-frontItem');
                }, 1000);
                setTimeout(function() {
                    elem2.addClass('js-activeLabels');
                    elem1.addClass('js-activeCapacity');
                    $('.js-rotatitonZone').removeClass('js-pointerFalse')
                },2000);
            } else {
                $(this).addClass('js-pointerFalse');
                elem2.addClass('backLeft');
                elem2.removeClass('frontCenter');
                elem2.removeClass('js-activeLabels');
                elem1.removeClass('js-activeCapacity')
                elem1.removeClass('backTop');
                elem1.addClass('frontRight');
                setTimeout(function() {
                    elem2.removeClass('backLeft');
                    elem2.removeClass('js-frontItem');
                    elem2.addClass('backTop');
                    elem1.removeClass('frontRight');
                    elem1.addClass('frontCenter');
                    elem1.addClass('js-frontItem');
                }, 1000);
                setTimeout(function() {
                    elem1.addClass('js-activeLabels');
                    elem2.addClass('js-activeCapacity');
                    $('.js-rotatitonZone').removeClass('js-pointerFalse')
                },2000);
            }
        }

    })

    // if(BX.getCookie('HideBaner') == 'Y'){
    //     $('.js-banner').addClass('hiddenBanner');
    // }

    $('.js-questionBtn').on('click', function(e) {
        e.preventDefault();
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).closest('.questionInfo__title').siblings('.js-questionText').slideUp();
        } else {
            $(this).addClass('active');
            $(this).closest('.questionInfo__title').siblings('.js-questionText').slideDown();
        }
    })

    $('.js-testBtn').on('click', function(e) {
        
    })

})
