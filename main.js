window.addEventListener('DOMContentLoaded', (event) => {
  const linkList = document.getElementById('link-list');
  const links = linkList.getElementsByTagName('a');

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
      event.preventDefault();
      const url = this.getAttribute('href');
      window.location.href = url;
    });
  }
});
