const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function getposts(id) {
    try {
        // document.querySelector('.loading').innerHTML = `
        // <img src="https://cdn.dribbble.com/users/341887/screenshots/4595077/arizdesign.gif"/>
        // `;

        const response = await fetch('https://noroffcors.herokuapp.com/https://api.bjornsendesign.tech/wp-json/wp/v2/posts/' + id);
        const jsonObject = await response.json();
        const postsSpecific = jsonObject.data;


    } catch (error) {
        // document.querySelector('.alert') = showAlert(
        //     'An error occured, please contact Noroff.no',
        //     'danger'
        // );

        console.log(error);

    } finally {
        // setTimeout(function () {
        //     document.querySelector('.alert').innerHTML = '';
        // }, 3000);

        document.querySelector('.loading').innerHTML = ``;
    }
}

getposts(id)