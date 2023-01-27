// Selector for the menu
const menu = document.querySelector('.menu');
const showMenu = document.querySelector('.nav-wrapper');
// Selector for the dropdown rotation
const firstDetail = document.querySelector('.nav-list-details-first');
const secondDetail = document.querySelector('.nav-list-details-second');
const menuDetail = document.querySelector('.menu-details-first');
const secondMenuDetail = document.querySelector('.menu-details-second');
// Selector for the marker
const marker = document.querySelector('.marker');
const marker2 = document.querySelector('.marker2');
const menuMarker = document.querySelector(".marker .menu-marker");
const menuMarker2 = document.querySelector('.menu-marker2')

// Logic for the menu on mobile devices
menu.addEventListener('click', () => {
    menu.classList.toggle('active'); 
    showMenu.classList.toggle('active');
});

// Effect for the toggle dropdown menu
firstDetail.addEventListener('toggle', () => {
    firstDetail.open ? marker.style.transform = 'rotate(180deg)' : marker.style.transform = 'rotate(0)';
});

secondDetail.addEventListener('toggle', () => {
    secondDetail.open ? marker2.style.transform = 'rotate(180deg)' : marker2.style.transform = 'rotate(0)';
});

// Effect for the mobile menu 
menuDetail.addEventListener('toggle', () => {
    menuDetail.open ? menuMarker.style.transform = 'rotate(180deg)' : menuMarker.style.transform = 'rotate(0)';
});

secondMenuDetail.addEventListener('toggle', () => {
    secondMenuDetail.open ? menuMarker2.style.transform = 'rotate(180deg)' : menuMarker2.style.transform = 'rotate(0)';
});

