// Nav toggle for mobile
const toggle = document.getElementById('nav-toggle');
const nav    = document.getElementById('main-nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
});

// Close nav when a link is clicked
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Header: transparent over hero, solid once scrolled past it
const header = document.getElementById('site-header');
const hero   = document.getElementById('hero');

const onScroll = () => {
  const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : 0;
  if (window.scrollY + header.offsetHeight >= heroBottom) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Active nav link highlighting based on scroll position
  const sections = ['about', 'specs', 'purchase', 'contact'];
  let current = '';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 80) current = id;
  });
  nav.querySelectorAll('a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
};

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
