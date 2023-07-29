//Automatic Carousel

  $(document).ready(function() {
    $('#carouselExampleIndicators').carousel({
      interval: 1200
    });
  });

// Video Cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
    item.addEventListener("mouseover",() =>{
        let video = item.children[1];
        video.play();
    })
    item.addEventListener("mouseleave", () =>{
        let video = item.children[1];
        video.pause();
    })
});

//Card Slider

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtn = [...document.querySelectorAll(".pb")];
let nxtBtn = [...document.querySelectorAll(".nb")];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth +200;
    })

    preBtn[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth +200;
    })
})

