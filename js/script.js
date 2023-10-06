/*
    Assignment #4
    {Bashar Matar}
*/

$(function () {
    // Check Geolocation Permissions
    if ("geolocation" in navigator) {
        // Geolocation is available
        navigator.geolocation.getCurrentPosition(function (position) {
            // Display Current Location
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const accuracy = position.coords.accuracy;

            // Display accuracy if you choose the bonus
            displayLocation("Current Location", latitude, longitude, accuracy);

            // Check Local Storage for Previous Location
            const storedLocation = localStorage.getItem("location");
            if (storedLocation) {
                // User is a returning visitor
                const [storedLat, storedLon] = storedLocation.split(",");
                const distance = calcDistanceBetweenPoints(
                    latitude,
                    longitude,
                    parseFloat(storedLat),
                    parseFloat(storedLon)
                );

                displayWelcomeMessage("Welcome back!");     // Display welcome message for returning visitor
                displayDistance(distance);                  // Display distance traveled
            } else {
                displayWelcomeMessage("Welcome to the page for the first time!"); // First-Time User Welcome
            }

            localStorage.setItem("location", `${latitude},${longitude}`);   // Update Local Storage
        }, function (error) {
            // Handle geolocation error
            displayErrorMessage("Geolocation is blocked. Please enable it to use the application.");
        });
    } 
    else {
        // Geolocation not available
        displayErrorMessage("Geolocation is not supported in your browser.");
    }

    // Function to display current location
    function displayLocation(label, lat, lon, accuracy) {
        const locationDiv = document.getElementById("locationhere");
        const locationInfo = document.createElement("div");
        locationInfo.innerHTML = `<strong>${label}:</strong><br>Latitude: ${lat.toFixed(6)}, Longitude: ${lon.toFixed(6)}`;
        locationDiv.appendChild(locationInfo);

        // Display accuracy if bonus enabled
        if (accuracy !== undefined) {
            const accuracyInfo = document.createElement("div");
            accuracyInfo.innerHTML = `Accuracy: ${accuracy.toFixed(2)} meters`;
            locationDiv.appendChild(accuracyInfo);
        }
    }

    // Function to display welcome message
    function displayWelcomeMessage(message) {
        const header = document.querySelector("header");
        const welcomeHeader = document.createElement("h2");
        welcomeHeader.textContent = message;
        header.appendChild(welcomeHeader);
    }

    // Function to display distance traveled
    function displayDistance(distance) {
        const header = document.querySelector("header");
        const distanceInfo = document.createElement("h2");
        distanceInfo.textContent = `You traveled ${distance.toFixed(2)} meters since your last visit.`;
        header.appendChild(distanceInfo);
    }

    // Function to display error message
    function displayErrorMessage(message) {
        const header = document.querySelector("header");
        const errorHeader = document.createElement("h2");
        errorHeader.textContent = message;
        header.appendChild(errorHeader);
    }





    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


