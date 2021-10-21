/* eslint-disable */

const hamburger = document.getElementById('hamburger');

const navUL = document.getElementById('nav-ul');

// Start

hamburger.addEventListener('click', () => {
  navUL.classList.toggle('active');
  if (this.scrollY > 20) {
    $(".navbar").addClass("sticky");
  } else {
    $(".navbar").removeClass("sticky");
  }
})