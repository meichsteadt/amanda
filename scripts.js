$(function() {
  // $('.scrollspy').scrollSpy('getActiveElement');
  var elems = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems, {scrollOffset: 64});

  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {startingTop: '0%', endingTop: '2.5%'});

  var elems = document.querySelectorAll('.slider');
  var height = window.innerHeight * .72;
  var instances = M.Slider.init(elems, {height: height, width: height, indicators: true, interval: 1000000000});

  $(window).scroll(function() {
    var y = $(document).scrollTop();
    if(y > 20) {
      $('.navbar-fixed').fadeIn(200);
    }
    else {
      $('.navbar-fixed').fadeOut(200);
    }
  })
  var year = new Date().getFullYear();
  $('#year').text(year)
})


function hideNavOnTop() {

}
