const postsAPI = 'https://noroffcors.herokuapp.com/https://api.bjornsendesign.tech/wp-json/wp/v2/posts';

// API Call
async function otherPosts(url) {
    try {
        const response = await fetch(url);
        const getImgJson = await response.json();

        // You may also like container
        for (let i = 3; i < 5; i++) {
            document.querySelector('.other__posts').innerHTML += `
                <div class="other__posts--content">
                    <a href="posts-specific.html?id=${getImgJson[i].id}">
                        <img class="other__posts--img posts-img${getImgJson[i].id}" src="${getImgJson[i].better_featured_image.media_details.sizes.large.source_url}">
                    </a>
                    <div class="description">
                        <a href="posts-specific.html?id=${getImgJson[i].id}">
                            <h3 class="small__header">${getImgJson[i].title.rendered}</h3>
                        </a>
                        <div class="next-paragraph"></div>
                        <p class="body-text">${getImgJson[i].excerpt.rendered}</p>
                    </div>
                </div>
                `;
            document.querySelector(`.posts-img${getImgJson[i].id}`).style.backgroundImage = `url(${getImgJson[i].better_featured_image.media_details.sizes.large.source_url})`;
        }

    } catch (error) {
        document.querySelector('.alert').innerHTML = showAlert(
            'An error occured, please contact The Modern Apartment',
            'danger'
        );

        console.log(error);

    } finally {
        setTimeout(function () {
            document.querySelector('.alert').innerHTML = '';
        }, 3000);
    }
}

otherPosts(postsAPI)