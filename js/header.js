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

hamburger.addEventListener('click', () => {
    navList.classList.toggle('showing');
    nav.classList.toggle('beige');
});