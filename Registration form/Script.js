$(document).ready(function() {
    // Handle form submission
    $('#registrationForm').submit(function(event) {
      event.preventDefault();
  
      // Gather form data
      var formData = $(this).serialize();
  
      // Send data to the process.php file using AJAX
      $.ajax({
        type: 'POST',
        url: 'process.php',
        data: formData,
        success: function(response) {
          // Show success popup
          $('#popup').fadeIn();
  
          // Hide the popup after 2 seconds
          setTimeout(function() {
            $('#popup').fadeOut();
          }, 2000);
  
          // Display submitted details below the form
          var userDetails = JSON.parse(response);
          var detailsHtml = `
            <h2>Submitted Details</h2>
            <p><strong>Name:</strong> ${userDetails.name}</p>
            <p><strong>Email:</strong> ${userDetails.email}</p>
            <p><strong>Phone:</strong> ${userDetails.phone}</p>
            <p><strong>Date of Birth:</strong> ${userDetails.dob}</p>
            <p><strong>Gender:</strong> ${userDetails.gender}</p>
            <p><strong>Message:</strong> ${userDetails.message}</p>
          `;
          $('#submittedDetails').html(detailsHtml).fadeIn();
        },
        error: function() {
          alert('There was an error processing your request.');
        }
      });
    });
  
    // Close popup when button is clicked
    $('#closePopup').click(function() {
      $('#popup').fadeOut();
    });
  });
  