document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navBg = document.querySelector('.nav-bg');
    navToggle.addEventListener('click', function () {
      if (!navToggle.checked) {
        navBg.style.display = 'block';
      } else {
        navBg.style.display = 'none';
      }
    });
});

