const marble = document.getElementById("marble");
let animationId;

function startAnimation() {
  animationId = requestAnimationFrame(moveMarble);
}

function stopAnimation() {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
}

function moveMarble() {
  // Update animation logic (e.g., change position, color)
  marble.style.transform = "translate(-50%, -50%) rotate(10deg)"; // Example rotation

  animationId = requestAnimationFrame(moveMarble);
}

marble.addEventListener("mouseover", stopAnimation);
marble.addEventListener("mouseout", startAnimation);

startAnimation(); // Start animation on page load