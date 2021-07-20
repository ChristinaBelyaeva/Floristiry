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
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 28,
    },
    // 992: {
    //   slidesPerView: 2,
    //   spaceBetween: 28,
    // },
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 60,
    }
  },
});