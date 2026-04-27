//Back to top button//
const btn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  btn.style.opacity = window.scrollY > 300 ? '1' : '0';
  btn.style.pointerEvents = window.scrollY > 300 ? 'auto' : 'none';
});

btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

//Dark and light mode toggle//
const toggle = document.getElementById('themeToggle');

                   // Load saved preference on page load
const saved = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', saved);

toggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

//const lazyImages = document.querySelectorAll('img.lazy');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;      
      img.classList.remove('lazy');  
      observer.unobserve(img);        
    }
  });
                // trigger when 10% visible
}, { threshold: 0.1 });  

lazyImages.forEach(img => observer.observe(img));

