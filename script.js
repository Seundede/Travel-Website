const menuBtn = document.querySelector('.menu')
const navLinks = document.querySelector('.nav-links')
menuBtn.addEventListener('click', function () {
    navLinks.classList.toggle('mobile-menu')
})