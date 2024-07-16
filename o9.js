const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Show initial navigation buttons
showButtons();

function showSlide(n) {
  slides.forEach((slide) => slide.style.display = "none");
  slides[n].style.display = "block";
  currentSlide = n;
  showButtons();
}

function plusSlide(n) {
  currentSlide = currentSlide + n;
  showSlide(currentSlide);
}

function showButtons() {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  if (currentSlide === 0) {
    prevButton.style.display = "none";
  } else {
    prevButton.style.display = "block";
  }
  if (currentSlide === slides.length - 1) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "block";
  }
}

showSlide(currentSlide); // Show the first slide initially