import $ from 'jquery';
import Swiper from 'swiper';
import magnificPopup from 'magnific-popup';
// import cookie from 'jquery.cookie';

$(document).ready(function() {

  // $(".js-phone").keypress(function(e) {
  //   phoneValid(e);
  // });

  // function phoneValid(evt) {
  //   var theEvent = evt || window.event;
  //   var key = theEvent.keyCode || theEvent.which;
  //   key = String.fromCharCode( key );
  //   var regex = /[0-9]|\./;
  //   if( !regex.test(key) ) {
  //     theEvent.returnValue = false;
  //     if(theEvent.preventDefault) theEvent.preventDefault();
  //   }
  // }
  // $(".js-phone").mask("+7 (999) 999-99-99");


  let mainSlider = new Swiper('#main-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    spaceBetween: 60,
    slideActiveClass: 'is-active',
    navigation: {
      prevEl: '#main-slider-prev',
      nextEl: '#main-slider-next',
    },
    pagination: {
      el: '#main-slider-pagination',
      type: 'bullets',
      clickable: true,
    }
  });

});