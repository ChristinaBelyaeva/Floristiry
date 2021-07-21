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
    overlay = document.querySelector('.js-overlay'),
    dialog = document.querySelector('.js-dialog'),
    closeButtons = document.querySelectorAll('.js-modal-close');
    body = document.querySelector('.body');
  
  console.log(closeButtons);
  
  modalButtons.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault();

      var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
      
        modalElem.classList.add('modal--active');
        overlay.classList.add('modal__overlay--active');
      dialog.classList.add('modal__dialog--active');
      body.classList.add('modal-open');
    });
  });

  closeButtons.forEach(function(item) {
    item.addEventListener('click', function () {
      var parentModal = this.closest('.modal');
      
      parentModal.classList.remove('modal--active');
      overlay.classList.remove('modal__overlay--active');
      dialog.classList.remove('modal__dialog--active');
      body.classList.remove('modal-open');
    });
  });
});