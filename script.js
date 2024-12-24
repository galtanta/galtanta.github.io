// script.js

// 切换深色模式
document.getElementById('toggle-theme').addEventListener('click', () => {
  document.documentElement.dataset.bsTheme =
    document.documentElement.dataset.bsTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', document.documentElement.dataset.bsTheme);
});

// 页面加载时检查用户偏好设置
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.dataset.bsTheme = savedTheme;
});