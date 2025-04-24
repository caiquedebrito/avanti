const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const toggle = item.querySelector('.accordion-toggle');
  const content = item.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    accordionItems.forEach(i => {
      const c = i.querySelector('.accordion-content');
      const t = i.querySelector('.accordion-toggle');
      if(i !== item) {
        c.setAttribute('hidden', '');
        t.classList.remove('expanded');
      }
    });

    if(content.hasAttribute('hidden')) {
      content.removeAttribute('hidden');
      toggle.classList.add('expanded');
    } else {
      content.setAttribute('hidden', '');
      toggle.classList.remove('expanded');
    }
  });
});

// const slidesContainer = document.querySelector('.carousel-slides');
// const dots = document.querySelectorAll('.carousel-dots .dot');
// const totalSlides = dots.length;
// let currentSlide = 0;

// function goToSlide(index) {
//   slidesContainer.style.transform = `translateX(-${index * 100}%)`;
//   dots.forEach((dot, i) => {
//     dot.classList.toggle('active', i === index);
//   });
//   currentSlide = index;
// }

// dots.forEach((dot, index) => {
//   dot.addEventListener('click', () => {
//     goToSlide(index);
//   });
// });

// setInterval(() => {
//   let nextSlide = (currentSlide + 1) % totalSlides;
//   goToSlide(nextSlide);
// }, 5000);