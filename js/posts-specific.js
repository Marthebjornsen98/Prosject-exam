const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function getposts(id) {
    try {
        document.querySelector('.loading').innerHTML = `
        <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_rkeqcf7h.json"  background="transparent"  speed="1.5"  style="width: 600px; height: 600px;"  loop  autoplay></lottie-player>
        `;

        const response = await fetch('https://noroffcors.herokuapp.com/https://api.bjornsendesign.tech/wp-json/wp/v2/posts/' + id);
        const postsSpecific = await response.json();

        document.title = postsSpecific.title.rendered;

        document.querySelector('.post-specific__container').innerHTML += `
            <div class="overlay__container">
                <div class="overlay">
                    <div class="header__container--specific">
                        <h1 class="heading__white">${postsSpecific.title.rendered}</h1></div>
                    </div>
                <div class="background-img"></div>
            </div>

            <div class="post-specific">${postsSpecific.content.rendered}</div>
            `;

        document.querySelector('.background-img').style.backgroundImage = `url(${postsSpecific.better_featured_image.media_details.sizes.large.source_url})`;

    } catch (error) {
        document.querySelector('.alert') = showAlert(
            'An error occured, please contact The Modern Apartment',
            'danger'
        );

        console.log(error);

    } finally {
        setTimeout(function () {
            document.querySelector('.alert').innerHTML = '';
        }, 3000);

        document.querySelector('.loading').innerHTML = ``;
    }
}

getposts(id)

window.onscroll = function () {
    if (window.scrollY > 800) {
        document.querySelector('.nav__item1').style.color = 'var(--black)';
        document.querySelector('.nav__item2').style.color = 'var(--black)';
        document.querySelector('.nav__item3').style.color = 'var(--black)';
        document.querySelector('.nav__item4').style.color = 'var(--black)';

        document.querySelector('.logo__container').innerHTML = `
        <a href="index.html"><img class="logo" src="img/logo-black.svg" alt="Illustrative logo with chair, lamp and table"></a>
        `;
    } else {
        document.querySelector('.nav__item1').style.color = 'var(--white)';
        document.querySelector('.nav__item2').style.color = 'var(--white)';
        document.querySelector('.nav__item3').style.color = 'var(--white)';
        document.querySelector('.nav__item4').style.color = 'var(--white)';

        document.querySelector('.logo__container').innerHTML = `
            <a href="index.html"><img class="logo" src="img/logo-white.svg" alt="Illustrative logo with chair, lamp and table"></a>
        `;
    };
};