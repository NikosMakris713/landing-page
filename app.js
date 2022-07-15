const activePage = window.location.pathname;
// eslint-disable-next-line no-unused-vars
const navLinks = document.querySelectorAll('nav a').forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('active');
  }
});
