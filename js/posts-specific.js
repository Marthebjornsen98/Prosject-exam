const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function getposts(id) {
    try {
        document.querySelector('.loading').innerHTML = `
        <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_dchle8f3.json"  background="transparent"  speed="1"  style="width: 500px; height: 400px;"  loop  autoplay></lottie-player>
        `;

        const response = await fetch('https://noroffcors.herokuapp.com/https://api.bjornsendesign.tech/wp-json/wp/v2/posts/' + id);
        const postsSpecific = await response.json();

        document.title = postsSpecific.title.rendered;

        document.querySelector('.post-specific__container').innerHTML += `
            <div class="overlay__container">
                <div class="overlay">
                    <div class="heading__container">
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