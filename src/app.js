const menu = document.querySelector('.menu');
const showMenu = document.querySelector('.nav-wrapper');

menu.addEventListener('click', () => {
    menu.classList.toggle('active'); 
    showMenu.classList.toggle('active');
});