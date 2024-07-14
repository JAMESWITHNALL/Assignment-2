let currentImageIndex = 0;

const mainimage = document.getElementById("mainimage");

const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

function nextImage() {
    currentImageIndex++;
    mainimage.src = images[currentImageIndex];
}

function previousImage() {
    currentImageIndex--;
    mainimage.src = images[currentImageIndex];
}

function changeBackground(index) {
    currentImageIndex = index;
    mainimage.src = images[currentImageIndex];
}
