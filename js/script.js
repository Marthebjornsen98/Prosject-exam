const sliderAPI = 'https://noroffcors.herokuapp.com/https://api.bjornsendesign.tech/wp-json/wp/v2/posts';
const alert = document.querySelector('.alert');
const linkHeadingElm = document.querySelector('.home-post__text');

// API Call
const sliderImg = async (url) => {
    try {
        const response = await fetch(url);
        const sliderImgResults = await response.json();
        console.log(sliderImgResults)

        // Slider img
        sliderImgResults.forEach(element => {
            if (element.better_featured_image.media_details.sizes.woocommerce_thumbnail.source_url) {
                document.querySelector('#slider').innerHTML += `
                    <div class="slider__content">
                        <a  href="posts-specific.html?id=${element.id}">
                            <img class="slider__img" src="${element.better_featured_image.media_details.sizes.woocommerce_thumbnail.source_url}">
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
        alert.innerHTML = showAlert(
            'An error occured, please contact The Modern Apartment',
            'danger'
        );

        console.log(error);

    } finally {
        setTimeout(function () {
            alert.innerHTML = '';
        }, 3000);
    }
};

sliderImg(sliderAPI)

// Slider function
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
                    arrows: false,
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
