
/* ===== Image Gallery Functionality ===== */
const images = [
  'images/shared_image.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg', 
  'images/img5.jpg', 'images/img6.jpg', 'images/img7.jpg', 'images/img8.jpg', 
  'images/img9.jpg', 'images/img10.jpg', 'images/img11.jpg', 'images/img12.jpg', 
  'images/img13.jpg', 'images/img14.jpg', 'images/img15.jpg', 'images/img16.jpg',
  'images/img17.jpg', 'images/img18.jpg', 'images/img19.jpg', 'images/img20.jpg',
  'images/img21.jpg', 'images/img22.jpg', 'images/img23.jpg', 'images/img24.jpg',
  'images/img25.jpg', 'images/img26.jpg', 'images/img27.jpg', 'images/img28.jpg',
  'images/img30.jpg', 'images/img31.jpg', 'images/img32.jpg', 'images/img33.jpg',
  'images/img34.jpg', 'images/img35.jpg', 'images/img36.jpg', 'images/img37.jpg',
  'images/img38.jpg'
];
let currentIndex = 0;
const totalImages = images.length;

const previousImgBtn = document.getElementById('previousImgBtn');
const nextImgBtn = document.getElementById('nextImgBtn');
const image = document.getElementById('image');
const popup = document.getElementById("completeGalleryPopup");
const closePopupBtn = document.getElementById("closePopupBtn");

/* ===== Pop-up ===== */
function triggerEndPopup() {
    setTimeout(() => {
        popup.showModal();
    }, 150);
}

closePopupBtn.addEventListener('click', () => {
    popup.close();
});

/* ===== Buttons for navigating Image Gallery ===== */
previousImgBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    image.src = images[currentIndex];
});

nextImgBtn.addEventListener('click', () => {
    if (currentIndex === totalImages - 2) {
        triggerEndPopup();
    }

    currentIndex = (currentIndex + 1) % images.length;
    image.src = images[currentIndex];
});


/* ===== Rainbow Effect on text ===== */
const prideEffect = document.querySelector("span");
let hue = 0;

function animatePride() {
  hue = (hue + 1) % 360;
  prideEffect.style.color = `hsl(${hue}, 100%, 50%)`; 
  requestAnimationFrame(animatePride);
}

animatePride();

/* ===== Text reponses on checkbox ===== */
function toggleText(checkboxId, textId) {
    var checkBox = document.getElementById(checkboxId);
    var textElement = document.getElementById(textId);
    
    if (checkBox.checked === true) {
        textElement.style.display = "block";
    } else {
        textElement.style.display = "none";
    }
}