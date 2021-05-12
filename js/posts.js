const postsAPI = 'https://api.bjornsendesign.tech/wp-json/wp/v2/posts/';

// API Call
const getposts = async () => {
    try {
        document.querySelector('.loading').innerHTML = `
        <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_eqkfnpuf.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
        `;

        const response = await fetch(postsAPI);
        const posts = await response.json();
        console.log(posts);

        // for (let i = 0; i < posts.length; i++) {
        posts.forEach(element => {

            document.querySelector('.posts__container').innerHTML += `
                <div class="posts__content">
                    <h2>${element.title.rendered}</h2>
                    <div class="next-paragraph"></div>
                    <p class="body-text">${element.excerpt.rendered}</p>
                </div>
                <div class="posts__img--container posts-img${element.id}"></div>
                <div class="published">${element.content.rendered}</div>
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

getposts()
