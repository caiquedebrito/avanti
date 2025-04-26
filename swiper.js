const swiper = new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 10,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2
    },
    670: {
      slidesPerView: 3
    },
    880: {
      slidesPerView: 4
    },
    1050: {
      slidesPerView: 5
    },
  }
});