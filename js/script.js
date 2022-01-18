const linkHeadingElm = document.querySelector(".home-post__text");

const sliderArray = [
  {
    img: "../../img/chair.jpeg",
    title: "All About The Chair",
  },
  {
    img: "../../img/pond-mirror.jpeg",
    title: "Pond Mirrors",
  },
  {
    img: "../../img/interior_light.jpeg",
    title: "Creme and beige",
  },
];

// Slider img
sliderArray.forEach((element) => {
  document.querySelector("#slider").innerHTML += `
            <div class="slider__content">
                <img class="slider__img" src="${element.img}">
                <h3 class="small__header">${element.title}</h3>
                </a>
            </div>
        `;
});
slider();

// Slider function
function slider() {
  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
