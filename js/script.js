const postsAPI = 'https://api.bjornsendesign.tech/wp-json/wp/v2/posts';

// API Call
const getposts = async () => {
    try {
        // document.querySelector('.loading').innerHTML = `
        // <img src="img/loading-gif.gif" alt="loading gif" />
        // `;

        const response = await fetch(postsAPI);
        const posts = await response.json();
        console.log(posts);

        //     $('.multiple-items').slick({
        //         infinite: true,
        //         slidesToShow: 3,
        //         slidesToScroll: 3
        //     });

        //     $(document).ready(function () {
        //         $('.slider').slick({
        //             setting- name: setting - value
        //         });
        // });



    } catch (error) {
        // document.querySelector('.alert').innerHTML = showAlert(
        //     'An error occured',
        //     'danger'
        // );
        console.log(error);
    } finally {
        // setTimeout(function () {
        //     document.querySelector('.alert').innerHTML = ``;
        // }, 3000);
        // document.querySelector('.loading').innerHTML = ``;
    };
};

getposts()

window.onscroll = function () {
    if (window.scrollY > 800) {
        document.querySelector('.nav__item1').style.color = 'var(--black)';
        document.querySelector('.nav__item2').style.color = 'var(--black)';
        document.querySelector('.nav__item3').style.color = 'var(--black)';
        document.querySelector('.nav__item4').style.color = 'var(--black)';

        document.querySelector('.logo__container').innerHTML = `
            <img src="img/logo-black.svg" alt="Illustrative logo with chair, lamp and table">
        `;
    } else {
        document.querySelector('.nav__item1').style.color = 'var(--white)';
        document.querySelector('.nav__item2').style.color = 'var(--white)';
        document.querySelector('.nav__item3').style.color = 'var(--white)';
        document.querySelector('.nav__item4').style.color = 'var(--white)';

        document.querySelector('.logo__container').innerHTML = `
            <img src="img/logo-white.svg" alt="Illustrative logo with chair, lamp and table">
        `;
    };
};

// cam at least it runs :) ^