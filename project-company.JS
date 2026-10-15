document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

document.querySelectorAll('#navMenu a').forEach(function (link) {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});

document.querySelectorAll('.faq-question').forEach(function (button) {
  button.addEventListener('click', function () {
    const item = button.parentElement; 
    item.classList.toggle('open');
  });
});

