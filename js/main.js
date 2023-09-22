// WEB303 Assignment 2

$(document).ready(function () {
    // Click event for the "Prospect" link
    $("#prospect").click(function (event) {
      event.preventDefault(); // Prevent the default link behavior
      loadContent("prospect.html"); // Load content from prospect.html
    });
  
    // Click event for the "Convert" link
    $("#convert").click(function (event) {
      event.preventDefault(); // Prevent the default link behavior
      loadContent("convert.html"); // Load content from convert.html
    });
  
    // Click event for the "Retain" link
    $("#retain").click(function (event) {
      event.preventDefault(); // Prevent the default link behavior
      loadContent("retain.html"); // Load content from retain.html
    });
  });

    function loadContent(page) {
    // Hide the content with animation
    $("#content").fadeOut(400, function () {
      // Load content using AJAX
      $.ajax({
        url: page,
        type: "GET",
        dataType: "html",
        success: function (data) {
          // Update the content div with the loaded data
          $("#content").html(data);
          // Show the content with animation
          $("#content").fadeIn(400);
        },
        error: function () {
          // Handle any errors here
          console.error("Error loading content.");
        },
      });
    });
}


  



