$(document).ready(function(){
// Header toggle // 
$("#toggle").click(function() {
  $(this).toggleClass("on");
  $(".h_menu").toggleClass('is-show');
});

 $('.banner_slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});




});

 

