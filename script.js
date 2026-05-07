// Smooth scroll for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if(window.scrollY > 50) {
    navbar.style.boxShadow = '0 5px 30px rgba(0,0,0,0.15)';
  } else {
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
  }
});

// Animate on scroll - Simple fade in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .feature-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = '0.6s';
  observer.observe(el);
});

console.log('Portfolio loaded! 🚀');