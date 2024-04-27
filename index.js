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

function openModal(){
  const modal = document.getElementById("modalwrapper");
  modal.style.display= 'flex';
  console.log("open modal");
}

function closeModal(){
  const modal = document.getElementById("modalwrapper");
  modal.style.display= 'none';
  console.log("close modal");
}