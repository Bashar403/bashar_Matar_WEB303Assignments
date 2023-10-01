function getTeamDataUsingGetJSON() {
  $.getJSON("team.json", function(data) {
    $.each(data, function(index, member) {
      // Create HTML elements for each team member
      var memberDiv = $("<div>");
      var nameHeader = $("<h2>").text(member.name);
      var positionHeader = $("<h5>").text(member.position);
      var bioPara = $("<p>").text(member.bio);

      // Append the elements to the #team div
      memberDiv.append(nameHeader, positionHeader, bioPara);
      $("#team").append(memberDiv);
    });
  });
}

function getTeamDataUsingAjax() {
  // Display "Loading..." while fetching data
  $("#team").html("Loading...");

  $.ajax({
    url: "team.json",
    type: "GET",
    dataType: "json",
    success: function(data) {
      // Display "Loading..." for 3 seconds
      setTimeout(function() {
        // Clear the "Loading..." message
        $("#team").empty();

        $.each(data, function(index, member) {
          // Create HTML elements for each team member
          var memberDiv = $("<div>");
          var nameHeader = $("<h2>").text(member.name);
          var positionHeader = $("<h5>").text(member.position);
          var bioPara = $("<p>").text(member.bio);

          // Append the elements to the #team div
          memberDiv.append(nameHeader, positionHeader, bioPara);
          $("#team").append(memberDiv);
        });
      }, 3000); //delay
    },
    error: function() {
      // Display an error message
      $("#team").html("Error: Could not retrieve content.");
    }
  });
}

// Call one of the methods in a ready function
$(document).ready(function() {
  getTeamDataUsingAjax(); 
});
