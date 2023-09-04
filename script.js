(async () => {
    const getWeather = async (city) => {
        const encodedCity = encodeURIComponent(city);
        const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${encodedCity}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0e0a4c17a7mshc47cbd432ab1b17p1d5a6djsn2c1132f8300a',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log(result);

            // Update the values on the webpage
            document.getElementById('cityName').textContent = city;
            document.getElementById('temp').textContent = result.temp || "N/A";
            document.getElementById('temp2').textContent = result.temp || "N/A";
            document.getElementById('feels_like').textContent = result.feels_like || "N/A";
            document.getElementById('humidity').textContent = result.humidity || "N/A";
            document.getElementById('humidity2').textContent = result.humidity || "N/A";
            document.getElementById('min_temp').textContent = result.min_temp || "N/A";
            document.getElementById('max_temp').textContent = result.max_temp || "N/A";
            document.getElementById('wind_speed').textContent = result.wind_speed || "N/A";
            document.getElementById('wind_speed2').textContent = result.wind_speed || "N/A";
            document.getElementById('wind_degrees').textContent = result.wind_degrees || "N/A";
            document.getElementById('sunrise').textContent = result.sunrise || "N/A";
            document.getElementById('sunset').textContent = result.sunset || "N/A";
        } catch (error) {
            console.error(error);
        }
    }

    // Event listener for the submit button
    const submit = document.getElementById('submit');
    const searchInput = document.getElementById('searchInput');  // Using 'searchInput' instead of 'citty'

    submit.addEventListener("click", (e) => {
        e.preventDefault();
        getWeather(searchInput.value.trim());
    });

    // Calling the function with an initial city
    getWeather('Durgapur');

})();

fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/durgapur/next7days?unitGroup=metric&key=83DFZQPT8HT89V8UQUTZ4ZDCM&contentType=json", {
  "method": "GET",
  "headers": {
  }
  })
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
