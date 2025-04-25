const swiper = new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
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