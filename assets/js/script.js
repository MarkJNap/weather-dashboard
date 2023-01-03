const apiKey = "2d3402229563fbfc5f169c939d8dc026";
let city = "London";

$(function () {
  // Function for getting the 5 Day forecast
function getForecast(city) {
  requestForecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=metric";
  fetch(requestForecastUrl)
      .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        // console.log(data.list[0].main.temp);
    });
  }

// Function for getting the current weather 
function getCurrentWeather(city) {
  requestCurrentUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";
  fetch(requestCurrentUrl)
    .then(function (response) {
      return response.json()
  })
  .then(function (data) {
      console.log(data);
      //Adds the searched city to the recent searches list
      let newCity = $("<li>").text(city)
      $("#recent-cities").append(newCity)
  });
}
// When a city is submitted it runs needed functions
$("#city-search-form").on("submit", function(e) {
  e.preventDefault();
  let city = $("#city").val();
  getForecast(city);
  getCurrentWeather(city);
})





})

