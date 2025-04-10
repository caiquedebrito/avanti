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