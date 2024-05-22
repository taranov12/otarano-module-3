const navMenu = document.querySelector('.nav-menu');
const dropdownMenu = document.querySelector('.dropdown-menu');

navMenu.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
    navMenu.classList.toggle('active')
});