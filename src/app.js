// Selector for the menu
const menu = document.querySelector('.menu');
const showMenu = document.querySelector('.nav-wrapper');
// Selector for the rotation
// const marker = document.querySelector('.marker');
// const details = document.querySelector('.nav-list-details');
const details = document.querySelectorAll('.nav-list-details');

// Logic for the menu on mobile devices
menu.addEventListener('click', () => {
    menu.classList.toggle('active'); 
    showMenu.classList.toggle('active');
});

// Logic to rotate the marker when the details is clicked
details.forEach((detail) => {
    detail.addEventListener('toggle', () => {
            const marker = document.querySelector('.marker');
            // marker.style.transform = detail.open ? 'rotate(180deg)' : 'rotate(0)';
        if (detail.open) {
            marker.style.transform = 'rotate(180deg)';
        } else {
            marker.style.transform = 'rotate(0)';
        }
        // markers.forEach(marker => {
        //     if (detail.open) {
        //         marker.style.transform = 'rotate(180deg)';
        //     } else {
        //         marker.style.transform = 'rotate(0)';
        //     }
        // })
    })
});

// details.forEach(detail => console.log(detail));

// console.log(details.open);
