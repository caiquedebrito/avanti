document.addEventListener("DOMContentLoaded", function() {
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

  var searchForms = document.querySelectorAll(".header-search form");
  searchForms.forEach(function(form) {
      form.addEventListener("submit", function(e) {
          e.preventDefault();
          var searchInputValue = form.querySelector("input[type='search']").value;
          var message = "Você buscou por: '" + searchInputValue + "'";

          var resultElement = form.querySelector(".search-result");
          if (!resultElement) {
              resultElement = document.createElement("p");
              resultElement.className = "search-result";
              form.appendChild(resultElement);
          }
          resultElement.textContent = message;
      });
  });
});

(function() {
  const slidesContainer = document.querySelector('.carousel-slides');
const dots = document.querySelectorAll('.carousel-dots .dot');
const totalSlides = dots.length;
let currentSlide = 0;

function goToSlide(index) {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  currentSlide = index;
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSlide(index);
  });
});

setInterval(() => {
  let nextSlide = (currentSlide + 1) % totalSlides;
  goToSlide(nextSlide);
}, 5000);
})();

function ajustarProdutosVisiveis(containerSelector) {
  const lista = document.querySelector(containerSelector);
  if (!lista) return;

  const produtos = lista.querySelectorAll('.product-card');
  let qtdVisivel;

  if (window.innerWidth <= 768) {
    qtdVisivel = 2;
  } else if (window.innerWidth <= 1024) {
    qtdVisivel = 4;
  } else {
    qtdVisivel = produtos.length;
  }

  produtos.forEach((produto, index) => {
    if (index < qtdVisivel) {
      produto.style.display = 'block';
    } else {
      produto.style.display = 'none';
    }
  });
}

function ajustarTodasAsListas() {
  ajustarProdutosVisiveis('#list1');
  ajustarProdutosVisiveis('#list2');
}

window.addEventListener('load', ajustarTodasAsListas);
window.addEventListener('resize', ajustarTodasAsListas);