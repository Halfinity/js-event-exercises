document.querySelector('.tree-structure').addEventListener('click', (e) => {
    const el = e.target;
    const sibling = el.nextSibling.nextSibling;
  
    if (el && el.className == 'toggle' && sibling) {
      sibling.classList.toggle('show');
    }
  });