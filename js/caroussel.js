
let img = document.querySelector("#carousel-image")

let caroussel = [
    {
        src: "../img/paysage.jpg",
        title : `Paysage`,
        alt: `un jolie paysage`,
    },
    {
        src: `../img/rivie╠Çre.jpg`,
        title : `Rivière`,
        alt: `une belle rivière`,
    },
    {

        src: `../img/salon.jpg`,
        title : `Salon`,
        alt: `un magnifique salon`,
    }

];
console.log(caroussel);

img.src = caroussel[0].src;
console.log(img.src = caroussel[0].src);

