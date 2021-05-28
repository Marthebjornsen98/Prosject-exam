const postsAPI = 'https://noroffcors.herokuapp.com/https://api.bjornsendesign.tech/wp-json/wp/v2/posts';

const searchList = document.querySelector('#search__list');
const searchBar = document.querySelector('#searchbar');
let postArray = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredPosts = postArray.filter((posts) => {
        return (
            posts.title.rendered.toLowerCase().includes(searchString)
        );
    });
    console.log(filteredPosts);
    displayPosts(filteredPosts);
});

const loadPosts = async (url) => {
    try {
        const result = await fetch(url);
        postArray = await result.json();
        displayPosts(postArray);

    } catch (error) {
        console.error(error);

    } finally {

    }
};

const displayPosts = (posts) => {
    const htmlString = posts.map((posts) => {
        return `
            <div class="posts__content">
                <a href="posts-specific.html?id=${posts.id}">
                    <h2 class="medium__header">${posts.title.rendered}</h2>
                </a>
                <div class="next-paragraph"></div>
                <p class="body-text">${posts.excerpt.rendered}</p>
            </div>
            <div class="posts__img">
                <a href="posts-specific.html?id=${posts.id}">
                    <img class="posts__img--search" src="${posts.better_featured_image.media_details.sizes.large.source_url}">
                </a>
            </div>
        `;
    })
        .join('');
    searchList.innerHTML = htmlString;
};

loadPosts(postsAPI);