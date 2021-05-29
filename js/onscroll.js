// Changing color and logo when you scroll
window.onscroll = function () {
    if (window.scrollY > 800) {
        document.querySelector('.nav__item1').style.color = 'var(--black)';
        document.querySelector('.nav__item2').style.color = 'var(--black)';
        document.querySelector('.nav__item3').style.color = 'var(--black)';
        document.querySelector('.nav__item4').style.color = 'var(--black)';
        hamburger.style.color = 'var(--black)';

        document.querySelector('.logo__container').innerHTML = `
        <a href="index.html">
            <img class="logo" src="img/logo-black.svg" alt="Illustrative logo with chair, lamp and table">
        </a>
        `;

    } else {
        document.querySelector('.nav__item1').style.color = 'var(--white)';
        document.querySelector('.nav__item2').style.color = 'var(--white)';
        document.querySelector('.nav__item3').style.color = 'var(--white)';
        document.querySelector('.nav__item4').style.color = 'var(--white)';
        hamburger.style.color = 'var(--white)';

        document.querySelector('.logo__container').innerHTML = `
        <a href="index.html">
            <img class="logo" src="img/logo-white.svg" alt="Illustrative logo with chair, lamp and table">
        </a>
        `;
    };
};

// cam, at least it runs :) ^