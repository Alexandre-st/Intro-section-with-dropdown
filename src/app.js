// Selector for the menu
const menu = document.querySelector('.menu');
const showMenu = document.querySelector('.nav-wrapper');
// Selector for the dropdown rotation
const firstDetail = document.querySelector('.nav-list-details-first');
const secondDetail = document.querySelector('.nav-list-details-second');
const marker = document.querySelector('.marker');
const marker2 = document.querySelector('.marker2');

// Logic for the menu on mobile devices
menu.onmouseover = () => {
    menu.classList.toggle('active'); 
    showMenu.classList.toggle('active');
};

// Effect for the toggle dropdown menu
firstDetail.addEventListener('toggle', () => {
    firstDetail.open ? marker.style.transform = 'rotate(180deg)' : marker.style.transform = 'rotate(0)';
});

secondDetail.addEventListener('toggle', () => {
    secondDetail.open ? marker2.style.transform = 'rotate(180deg)' : marker2.style.transform = 'rotate(0)';
})

