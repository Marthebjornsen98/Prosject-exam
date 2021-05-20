const postsAPI = 'https://noroffcors.herokuapp.com/https://api.bjornsendesign.tech/wp-json/wp/v2/posts';

// API Call
const getposts = async (url) => {
    try {
        document.querySelector('.loading').innerHTML = `
        <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_eqkfnpuf.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
        `;

        const response = await fetch(url);
        const posts = await response.json();
        console.log(posts);

        posts.forEach(element => {
            document.querySelector('.posts__container').innerHTML += `
                <div class="posts__content">
                    <a href="posts-specific.html?id=${element.id}">
                        <h2 class="medium__header">${element.title.rendered}</h2>
                    <a>
                    <div class="next-paragraph"></div>
                    <p class="body-text">${element.excerpt.rendered}</p>
                </div>
                <div class="posts__img--container posts-img${element.id}"></div>
            `;

            document.querySelector(`.posts-img${element.id}`).style.backgroundImage = `url(${element.better_featured_image.media_details.sizes.large.source_url})`;
        });

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

        document.querySelector('.loading').innerHTML = ``;
    };
};

getposts(postsAPI);

const seeMoreBtn = document.querySelector('.see-more__btn');

seeMoreBtn.onclick = function () {
    getposts(postsAPI + `?page=2`);
    seeMoreBtn.style.display = 'none';
};
