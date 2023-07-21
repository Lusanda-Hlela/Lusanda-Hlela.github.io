// Image Slider JavaScript
 
//Variables that manipulate the slide constainer and images
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const showDetails = document.querySelectorAll('.details');

// Buttons to control the slide images
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn'); 

// Counter to track the slide images and the size variable used to move the slide images inside or within the container border
let counter = 1;
const size = carouselImages[0].clientWidth; // All images within the carousel-slide container are a NodeList, where each image is accessed by an index number

// Make the first image appear first, not the clone image using the transform styling property and traslateX value to move the clone image backwards by its width

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
showDetails[counter - 1].style.display = 'block';


// Button Listeners: attach clicking event to the HTML button elements for selecting which images to view, and use the CSS transition property to adjust and smooth out sliding of images when the button is clicked, the movement of images is done by the transform property

nextBtn.addEventListener('click', nextFunction);
function nextFunction() {
  // interrupt the function to return undefined when the index is higher than the number of images
  if (counter >= carouselImages.length - 1) {
    return; 
  }
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  showDetails[counter - 1].style.display = 'none';
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  showDetails[counter - 1].style.display = 'block';
} 

prevBtn.addEventListener('click', prevFunction);
function prevFunction() {
  if (counter <= 0) {
    return;
  }
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  showDetails[counter - 1].style.display = 'none';
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  showDetails[counter - 1].style.display = 'block';
}

// End the transition when the image viewed is the lastClone
carouselSlide.addEventListener('transitionend', tranendFunction);
function tranendFunction() {
  if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    showDetails[counter - 1].style.display = 'block';
  }
  if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    showDetails[counter - 1].style.display = 'block';
  }
}
