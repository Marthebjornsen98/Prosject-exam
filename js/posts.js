const postsAPI = 'https://noroffcors.herokuapp.com/https://api.bjornsendesign.tech/wp-json/wp/v2/posts?per_page=20';

// API Call
const getposts = async (url) => {
    try {
        document.querySelector('.loading').innerHTML = `
        <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_dchle8f3.json" background="transparent" speed="1" style="width: 500px; height: 400px;" loop autoplay></lottie-player>
        `;

        const response = await fetch(url);
        const postsAPI = await response.json();
        console.log(postsAPI);


        postsAPI.forEach(element => {
            document.querySelector('.posts__container').innerHTML += `
                <div class="posts__content">
                    <a href="posts-specific.html?id=${element.id}">
                        <h2 class="medium__header">${element.title.rendered}</h2>
                    <a>
                    <div class="next-paragraph"></div>
                    <p class="body-text">${element.excerpt.rendered}</p>
                </div>
                <a href="posts-specific.html?id=${element.id}">
                    <div class="posts__img--container posts-img${element.id}"></div>
                </a>
            `;
            document.querySelector(`.posts-img${element.id}`).style.backgroundImage = `url(${element.better_featured_image.media_details.sizes.large.source_url})`;
        });

    } catch (error) {
        document.querySelector('.alert').innerHTML = showAlert(
            'An error occured, please contact The Modern Apartment',
            'danger'
        );
        console.log(error);

    } finally {
        setTimeout(function () {
            document.querySelector('.alert').innerHTML = ``;
        }, 3000);

        document.querySelector('.loading').innerHTML = ``;
    };
};

getposts(postsAPI);

// See more posts btn
const seeMoreBtn = document.querySelector('.see-more__btn');
seeMoreBtn.onclick = () => {
    getposts(postsAPI + `?page=12`);
    seeMoreBtn.style.display = 'none';
};
