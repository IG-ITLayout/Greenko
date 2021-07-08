$(function(){


 $('.sliderpage__image').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.sliderpage__text-inner',
  arrows:false,
  verticalSwiping:false,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        
      }
    },
  ]
 
});
$('.sliderpage__text-inner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.sliderpage__image',
  fade: true,
  prevArrow: false,
  dots:true,
  nextArrow:'<button  class="slick-btn slick-next"><img src="../img/arrow-r.png" alt="next"></button>',
  responsive: [
    {
      breakpoint: 732,
      settings: {
        arrows: false,
        dots:false
      }
    },
  ]
  });

  $('.header__link-menu').click(function(event){
  $('.header__link-menu,.header__menu-inner').toggleClass('active')
  });
 

});
