
// ========================================================



// ==================================gallery script================================================================
$(document).ready(function () {
  $('#viewAllButton').on('click', function () {
      $('.image-button.hidden').removeClass('hidden');
      $(this).hide();
  });
});

// ==================================gallery script================================================================







document.addEventListener(
  "contextmenu",
  (e) => {
    e.preventDefault();
  },
  false
);


document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.keyCode == 123) {
    e.stopPropagation();
    e.preventDefault();
  }
});