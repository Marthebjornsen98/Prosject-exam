const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const loading = document.querySelector('.loading');
const alert = document.querySelector('.alert');

async function getposts(id) {
    try {
        const response = await fetch('https://noroffcors.herokuapp.com/https://api.bjornsendesign.tech/wp-json/wp/v2/posts/' + id);
        const postsSpecific = await response.json();

        // Calling the functions
        getPostSpecific(postsSpecific);
        getModal(postsSpecific);

        // Loading, title and meta tags
        loading.innerHTML = `<lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_dchle8f3.json" background="transparent" speed="1" style="width: 500px; height: 400px;" loop autoplay></lottie-player>`;
        document.title = postsSpecific.title.rendered;
        document.querySelector('meta[name="description"]').setAttribute(
            'content',
            `This blogpost at The Modern Apartment is about ${postsSpecific.title.rendered}`
        );

    } catch (error) {
        alert = showAlert(
            'An error occured, please contact The Modern Apartment',
            'danger'
        );

        console.log(error);

    } finally {
        setTimeout(() => {
            alert.innerHTML = '';
        }, 3000);

        loading.innerHTML = ``;
    }
}

getposts(id)

// Content from Wordpress
const getPostSpecific = ((element) => {
    document.querySelector('.post-specific__container').innerHTML += `
    <div class="overlay__container">
        <div class="overlay">
            <div class="heading__container">
                <h1 class="heading__white">${element.title.rendered}</h1></div>
            </div>
        <div class="background-img"></div>
    </div>
    <div class="post-specific">${element.content.rendered}</div>
    `;
    document.querySelector('.background-img').style.backgroundImage = `url(${element.better_featured_image.source_url})`;
});

// Image modal
const getModal = (() => {
    const modalImg = document.querySelectorAll('.modal__img');
    const overlay = document.querySelector('.modal__overlay');

    modalImg.forEach(element => {
        element.onclick = function () {
            overlay.style.display = 'block';
            document.querySelector('.overlay__img--container').innerHTML =
                `<img class="pop-up__img" src="${element.src}">`;
        };
    });

    overlay.onclick = () => {
        overlay.style.display = 'none';
    };
})