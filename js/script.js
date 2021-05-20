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

// cam at least it runs :) ^


function slider() {
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
};

const sliderAPI = 'https://noroffcors.herokuapp.com/https://api.bjornsendesign.tech/wp-json/wp/v2/posts';

const sliderImg = async (url) => {
    try {
        const response = await fetch(url);
        const sliderImgResults = await response.json();
        console.log(sliderImgResults)

        sliderImgResults.forEach(element => {
            if (element.better_featured_image.media_details.sizes.woocommerce_thumbnail.source_url) {
                document.querySelector('#slider').innerHTML += `
                    <div class="slider__content">
                        <a  href="posts-specific.html?id=${element.id}">
                            <img src="${element.better_featured_image.media_details.sizes.woocommerce_thumbnail.source_url}">
                            <h3 class="small__header">${element.title.rendered}</h3>
                        </a>
                    </div>
                `;

            } else {
                document.querySelector('#slider').innerHTML += `
                  <h2>${element.title.rendered}</h2>
                `;
            }
        });

        slider();

    } catch (error) {
        console.log(error)

    } finally {

    };
};

sliderImg(sliderAPI);