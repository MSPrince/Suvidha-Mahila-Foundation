// JavaScript to handle the window scroll event
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.body.classList.add("scrolled");
    document.querySelector(".navbar").classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
    document.querySelector(".navbar").classList.remove("scrolled");
  }
};

// ========================================================
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Assume successful form submission for demonstration
    // In a real-world scenario, you would handle the form submission asynchronously
    // (e.g., using AJAX) and display the thank you message accordingly
    showThankYouMessage();
  });

function showThankYouMessage() {
  // Hide the form
  document.getElementById("contactForm").style.display = "none";
  // Show the thank you message
  document.getElementById("thankYouMessage").style.display = "block";
  // Close the modal after a delay (3 seconds in this example)
  setTimeout(function () {
    $("#contactModal").modal("hide");
  }, 3000);
}
// ========================================================
