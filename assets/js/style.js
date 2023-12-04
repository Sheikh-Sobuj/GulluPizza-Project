$(document).ready(function () {
    $("#menu").click(function () {
        $("#navbar").slideToggle("slow");
    });
});
var swiper = new Swiper(".heroslider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });
  var swiper = new Swiper(".proslider", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1590: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });