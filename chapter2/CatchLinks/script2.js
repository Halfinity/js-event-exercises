const linkList = document.querySelectorAll('#contents a');

for (let link of linkList) {
  link.addEventListener('click', (e) => {
      if (confirm(`leave for ${link.href}`)) {
        return;
      } else {
        e.preventDefault();
      }
  })
}