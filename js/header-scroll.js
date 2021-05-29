const navItem = document.querySelectorAll('.nav__item--black');
const nav = document.querySelector('.nav__container');
const hamburger = document.querySelector('#hamburger');
const navList = document.querySelector('.nav__list');

// Making the nav item bold if clicked on
for (let i = 0; i < navItem.length; i++) {
    if (navItem[i].href === location.href) {
        navItem[i].className = 'bold';
    };
};

// Hamburger menu, showing and removing the beige on home and posts specific
hamburger.addEventListener('click', () => {
    navList.classList.toggle('showing');
    nav.classList.toggle('nav__container--tall');

    if (window.scrollY > 800) {
        nav.classList.toggle('beige');
    } else {
        nav.classList.toggle('transparent');
    }
});