const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");

const hoverImage1 = "image1_hover.jpg"; // Path to hover image for image 1
const hoverImage2 = "image2_hover.jpg"; // Path to hover image for image 2

image1.addEventListener("mouseover", function() {
  this.src = hoverImage1;
});

image1.addEventListener("mouseout", function() {
  this.src = "image1.jpg";
});

image2.addEventListener("mouseover", function() {
  this.src = hoverImage2;
});

image2.addEventListener("mouseout", function() {
  this.src = "image2.jpg";
});