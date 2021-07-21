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

!function (e) { "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function (e) { for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;)++n; return Boolean(o[n]) }), "function" != typeof e.closest && (e.closest = function (e) { for (var t = this; t && 1 === t.nodeType;){ if (t.matches(e)) return t; t = t.parentNode } return null }) }(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function () {
  var modalButtons = document.querySelectorAll('.js-open-modal'),
    overlayNav = document.querySelector('.nav__overlay'),
    overlayFeedback = document.querySelector('.feedback__overlay'),
    dialogNav = document.querySelector('.nav__dialog'),
    dialogFeedback = document.querySelector('.feedback__dialog'),
    closeButtons = document.querySelectorAll('.js-modal-close');
    body = document.querySelector('.body');
  
  console.log(closeButtons);
  
  modalButtons.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault();

      var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
      
        modalElem.classList.add('modal--active');
        overlayNav.classList.add('nav__overlay--active');
        overlayFeedback.classList.add('feedback__overlay--active');
      dialogNav.classList.add('nav__dialog--active');
      dialogFeedback.classList.add('feedback__dialog--active');
      body.classList.add('modal-open');
    });
  });

  closeButtons.forEach(function(item) {
    item.addEventListener('click', function () {
      var parentModal = this.closest('.modal');
      
      parentModal.classList.remove('modal--active');
      overlayNav.classList.remove('nav__overlay--active');
      overlayFeedback.classList.remove('feedback__overlay--active');
      dialogNav.classList.remove('nav__dialog--active');
      dialogFeedback.classList.remove('feedback__dialog--active');
      body.classList.remove('modal-open');
    });
  });
});