const swiper = new Swiper('.services-container', {
  observer: true,
  // Optional parameters
  // loop: true,
  // watchOverflow: true,

  // If we need pagination
  pagination: {
    el: '.services-pagination',
    // type: 'custom',
    clickable: true,
    renderBullet: function (index, className) {
      console.log(index, className);
      return '<span class="' + className + '"></span>';
  },
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 230,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    1610: {
      slidesPerView: 4,
      spaceBetween: 60,
    }
  },
});