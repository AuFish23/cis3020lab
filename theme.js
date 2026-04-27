// theme.js — shared dark/light mode toggle
// Include this script on every page: <script src="theme.js"></script>

(function () {
  const STORAGE_KEY = 'cis3020-theme';

  // Apply saved theme immediately (before paint) to avoid flicker
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Inject the toggle into the header
    const header = document.querySelector('header');
    if (!header) return;

    const toggle = document.createElement('label');
    toggle.className = 'theme-toggle';
    toggle.setAttribute('aria-label', 'Toggle dark mode');
    toggle.innerHTML = `
      <span id="theme-label">☀ Light</span>
      <button class="toggle-switch" id="theme-btn" role="switch" aria-checked="false"></button>
    `;
    header.appendChild(toggle);

    const btn = document.getElementById('theme-btn');
    const label = document.getElementById('theme-label');

    function updateUI(isDark) {
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      btn.setAttribute('aria-checked', isDark ? 'true' : 'false');
      label.textContent = isDark ? '☾ Dark' : '☀ Light';
      localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
    }

    // Init state
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    updateUI(isDark);

    btn.addEventListener('click', function () {
      const currentlyDark = document.documentElement.getAttribute('data-theme') === 'dark';
      updateUI(!currentlyDark);
    });
  });
})();
