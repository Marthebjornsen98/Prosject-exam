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

        document.querySelector('.wallpaper__container').innerHTML += `
            <div class="wallpaper-img__container">
                <img class="wallpaper-img" src="${posts[0].better_featured_image.media_details.sizes.woocommerce_single.source_url}" alt="Bedroom with brown wall">
            </div>

            <div class="wallpaper__text">
                <h2>${posts[0].title.rendered}</h2>
                <div class="wallpaper__body-text">
                    <p class="body-text">${posts[0].content.rendered}</p>
                </div>
                <div class="wallpaper__read-more--container">
                    <p class="read-more">Read more</p>
                </div>
            </div>
            `;

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