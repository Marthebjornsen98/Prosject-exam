const navItem = document.querySelectorAll('.nav__item--black');
const hamburger = document.querySelector('#hamburger');
const navList = document.querySelector('.nav__list');

for (let i = 0; i < navItem.length; i++) {
    if (navItem[i].href === location.href) {
        navItem[i].className = 'bold';
    };
};

hamburger.addEventListener('click', () => {
    navList.classList.toggle('showing');
});