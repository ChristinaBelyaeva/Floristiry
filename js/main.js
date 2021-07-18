const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  // loop: true,
  slidesPerView: auto,
  spaceBetween: 115,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});