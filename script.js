
    // JavaScript to handle the window scroll event
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.body.classList.add("scrolled");
            document.querySelector(".navbar").classList.add("scrolled");
        } else {
            document.body.classList.remove("scrolled");
            document.querySelector(".navbar").classList.remove("scrolled");
        }
    };


    
    // JavaScript to handle the form submission and thank you modal
    document.getElementById('contactUsModal').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Add your form submission logic here

        // Close the contactUsModal
        $('#contactUsModal').modal('hide');

        // Open the thankYouModal
        $('#thankYouModal').modal('show');
    });
