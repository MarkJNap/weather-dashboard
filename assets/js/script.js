const apiKey = "2d3402229563fbfc5f169c939d8dc026";

// API Call example:
// http://api.openweathermap.org/geo/1.0/direct?q=London&appid={API key}


// Call for 5 day forecast
requestForecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q=Perth&appid=" + apiKey + "&units=metric"

function getApi(requestForecastUrl) {
    fetch(requestForecastUrl)
      .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
    });
  }

getApi(requestForecastUrl);
