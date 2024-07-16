const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const errorMessage = document.getElementById("errorMessage");

function validateForm() {
  let isValid = true;
  errorMessage.textContent = ""; // Clear previous error message

  // Username validation (example: check for minimum length)
  if (usernameInput.value.length < 3) {
    isValid = false;
    errorMessage.textContent = "Username must be at least 3 characters long.";
  }

  // Email validation (example: check for valid email format)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    isValid = false;
    errorMessage.textContent = "Please enter a valid email address.";
  }

  // Password validation (example: check for minimum length and match confirmation)
  if (passwordInput.value.length < 8) {
    isValid = false;
    errorMessage.textContent = "Password must be at least 8 characters long.";
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    isValid = false;
    errorMessage.textContent = "Passwords do not match.";
  }

  return isValid;
}