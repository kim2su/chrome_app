const images = ["bg_img1.jpg", "bg_img2.jpg", "bg_img3.png", "bg_img4.jpg", "bg_img5.jpg", "bg_img6.jpg", ]



const chosenImages = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");
bgImage.src = `./img/${chosenImages}`

document.body.appendChild(bgImage);