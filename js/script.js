// $('.multiple-items').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
// });

// $(document).ready(function () {
//     $('.slider').slick({
//         setting- name: setting - value
//  });
// });

window.onscroll = function () {
    if (window.scrollY > 800) {
        document.querySelector('.nav__item1').style.color = 'var(--black)';
        document.querySelector('.nav__item2').style.color = 'var(--black)';
        document.querySelector('.nav__item3').style.color = 'var(--black)';
        document.querySelector('.nav__item4').style.color = 'var(--black)';

        document.querySelector('.logo__container').innerHTML = `
            <img class="logo" src="img/logo-black.svg" alt="Illustrative logo with chair, lamp and table">
        `;
    } else {
        document.querySelector('.nav__item1').style.color = 'var(--white)';
        document.querySelector('.nav__item2').style.color = 'var(--white)';
        document.querySelector('.nav__item3').style.color = 'var(--white)';
        document.querySelector('.nav__item4').style.color = 'var(--white)';

        document.querySelector('.logo__container').innerHTML = `
            <img class="logo" src="img/logo-white.svg" alt="Illustrative logo with chair, lamp and table">
        `;
    };
};

// cam at least it runs :) ^!fs
