$(document).ready(function () {


  /* ========================================================
      Fixed Nav — Project Details
  =========================================================== */

  $('[data-type="fixed"]').each(function(){
    var $fixedObj = $(this);
    var $offset = $fixedObj.offset().top;

    $(window).scroll(function() {
        scroll_amount   = $(window).scrollTop() - $offset;
        obj_opacity     = 0 + (1 / 150) * scroll_amount;
        if ($(window).scrollTop() >= $offset) {
            $fixedObj.addClass('fixed');
            $fixedObj.css('background', 'rgba(255, 255, 255, '+obj_opacity+')');
        } else {
            $fixedObj.removeClass('fixed');
        }
    });

  });


  /* ========================================================
      Mobile Nav Click — Global
  =========================================================== */

  $('.ss-rows').click(function(){
    var clicks = $(this).data('clicks');
    if (clicks) {
      $('#nav-main').slideUp();
    } else {
      $('#nav-main').slideDown();
    }
    $(this).data("clicks", !clicks);
  });

  /* ========================================================
      Primary Nav Show — Global
  =========================================================== */

  $(window).resize(function(){
    var w = $(window).width();
    if(w >= 768) {
      $('#nav-main').show();
    }
    if(w <= 767) {
      $('#nav-main').hide();
    }
    else {
    }
  });
  /* ========================================================
      K Code — Global
  =========================================================== */

    $(function() {
    var audioElement = document.createElement('audio');

    $( window ).konami({
      cheat: function() {
        if($('body').hasClass('meow')) {
          $('body').removeClass('meow');
          audioElement.pause();
        } else {
          $('body').addClass('meow');
          audioElement.setAttribute('src', '_themes/sfbay/mp3/stage_clear.mp3');
          $.get();
          audioElement.addEventListener("load", function() {
          audioElement.play();
          }, true);

          audioElement.play();


        }
      }
    });
  });

});
