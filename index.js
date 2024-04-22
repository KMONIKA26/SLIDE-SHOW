let slideIndex = 0;
let slideshowInterval;

function showSlides() {
  const slides = document.querySelectorAll('.slides img');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
}

function nextSlide() {
  stopSlideshow();
  showSlides();
}

function prevSlide() {
  stopSlideshow();
  slideIndex -= 2;
  if (slideIndex < 0) {
    slideIndex = 0;
  }
  showSlides();
}

function startSlideshow() {
  showSlides();
  slideshowInterval = setInterval(showSlides, 2000); // Change slide every 2 seconds
}

function stopSlideshow() {
  clearInterval(slideshowInterval);
}

function toggleSlideshow() {
  if (slideshowInterval) {
    stopSlideshow();
    document.querySelector('.start-stop-btn').innerText = 'Start';
  } else {
    startSlideshow();
    document.querySelector('.start-stop-btn').innerText = 'Stop';
  }
}

startSlideshow(); // Start slideshow automatically
