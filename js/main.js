(function($){


  $(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // logo animation
    $('.js-logo').css({
      'transform' : 'translate(0px, '+ wScroll/2  +'%)'
    });


    // clothes elements
    if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {

      $('.clothes-pics figure').each(function(i){

        setTimeout(function(){
          $('.clothes-pics figure').eq(i).addClass('is-showing');
        }, (700 * (Math.exp(i * 0.14))) - 700);
      });

    }


    if(wScroll> $('.fade-in-on-visible').offset().top - $(window).height() + 50 ){
      $('.fade-in-on-visible').addClass('visible')
    }

  });
  
  if(navigator.userAgent.match(/Trident\/7\./)) { // if IE
    $('body').on("mousewheel", function () {
      // remove default behavior
      event.preventDefault();

      //scroll without smoothing
      var wheelDelta = event.wheelDelta;
      var currentScrollPosition = window.pageYOffset;
      window.scrollTo(0, currentScrollPosition - wheelDelta);
    });
  }
})(jQuery);