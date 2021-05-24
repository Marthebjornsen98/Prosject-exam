const navItem = document.querySelectorAll('.nav__item--black');
const nav = document.querySelector('.nav__container');
const hamburger = document.querySelector('#hamburger');
const navList = document.querySelector('.nav__list');

for (let i = 0; i < navItem.length; i++) {
    if (navItem[i].href === location.href) {
        navItem[i].className = 'bold';
    };
};

hamburger.addEventListener('click', () => {
    navList.classList.toggle('showing');

    if (window.scrollY > 800) {
        nav.classList.toggle('beige');
    } else {
        nav.classList.toggle('transparent');
    }
});