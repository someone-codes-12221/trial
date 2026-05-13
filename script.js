const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');
const year = document.getElementById('year');

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
  toggle.textContent = savedTheme === 'light' ? '☀️' : '🌙';
}

toggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  toggle.textContent = next === 'light' ? '☀️' : '🌙';
});

year.textContent = new Date().getFullYear();
