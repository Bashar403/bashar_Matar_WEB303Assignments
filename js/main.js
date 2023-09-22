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

  



