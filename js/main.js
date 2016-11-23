(function($){
  // init Skrollr
  var s = skrollr.init({
    render: function(data) {

    }
  });



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

  })

})(jQuery);