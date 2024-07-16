const visitCountElement = document.getElementById("visitCount");
const lastVisitElement = document.getElementById("lastVisit");

function updateVisitInfo() {
  let visitCount = 0;
  let lastVisit = "";

  // Check if cookie exists
  if (document.cookie) {
    const cookieData = document.cookie.split(";");
    for (const cookie of cookieData) {
      const [key, value] = cookie.trim().split("=");
      if (key === "visitCount") {
        visitCount = parseInt(value, 10); // Convert string to number
      } else if (key === "lastVisit") {
        lastVisit = new Date(value);
      }
    }
  }

  // Update visit count
  visitCount++;

  // Update last visit timestamp
  lastVisit = new Date();

  // Store updated data in cookies
  document.cookie = visitCount='${visitCount}; expires=Thu, 31 Dec 2027 23:59:59 GMT; path=/';
  document.cookie = lastVisit='${lastVisit.toUTCString()}; expires=Thu, 31 Dec 2027 23:59:59 GMT; path=/';

  // Display visit information
  if (visitCount === 1) {
    visitCountElement.textContent = "You have never visited before!";
  } else {
    visitCountElement.textContent = 'You have visited ${visitCount} times!';
  }
  lastVisitElement.textContent = 'You last visited on ${lastVisit.toLocaleDateString()} at ${lastVisit.toLocaleTimeString()}';
}

updateVisitInfo(); // Call the function on page load