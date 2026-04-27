
//Dark and light mode toggle//
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');

  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  toggle.textContent = saved === 'dark' ? 'Light mode' : 'Dark mode';

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    toggle.textContent = next === 'dark' ? 'Light mode' : 'Dark mode';
  });
});
