
$(function () {
  // API Key to get the weather information
  const apiKey = "2d3402229563fbfc5f169c939d8dc026";

  // For icon usage
  // http://openweathermap.org/img/w/10d.png

  // Function for getting the current day weather and displaying the information
  function getCurrentWeather(city) {
    requestCurrentUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";
    fetch(requestCurrentUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //Adds the searched city to the recent searches list
      let newCity = $("<li>").text(city);
      $("#recent-cities").append(newCity);

      // Variables for setting the information
      let currentCityEl = $("#current-city");
      let currentTempEl = $("#current-temp");
      let currentWindEl = $("#current-wind");
      let currentHumidityEl = $("#current-humidity");
      let windSpeed = Number(data.wind.speed*3.6).toFixed(2);
      let currentimgEl = $("#current-weather-icon")

      // Adds the information to the elements to display
      currentCityEl.text(city);
      currentTempEl.text("Temp: " + data.main.temp + "°C");
      currentWindEl.text("Wind speed: " + windSpeed + "km/h");
      currentHumidityEl.text("Humidity: " + data.main.humidity + "%");
      currentimgEl.attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png")
    
      // Gets the current Date to display
      currentTime();
    });
  }

  // Function for getting the 5 Day forecast and displaying the information
  function getForecast(city) {
    requestForecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=metric";
    fetch(requestForecastUrl)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      // console.log(data);
      // TODO Put this in some kind of loop if have the time
      // Day 1 Information
      let tempEl1 = $("#temp-one")
      let windEl1 = $("#wind-one")
      let humidityEl1 = $("#humidity-one")
      let imgEl1 = $("#weather-icon-one")
      
      tempEl1.text("Temp: " + data.list[0].main.temp + "°C")
      windEl1.text("Wind Speed: " + Number(data.list[0].wind.speed*3.6).toFixed(2) + "km/h")
      humidityEl1.text("Humidity: " + data.list[0].main.humidity + "%")
      imgEl1.attr("src", "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png")

      
      // Day 2 Information
      let tempEl2 = $("#temp-two")
      let windEl2 = $("#wind-two")
      let humidityEl2 = $("#humidity-two")
      let imgEl2 = $("#weather-icon-two")

      tempEl2.text("Temp: " + data.list[8].main.temp + "°C")
      windEl2.text("Wind Speed: " + Number(data.list[8].wind.speed*3.6).toFixed(2) + "km/h")
      humidityEl2.text("Humidity: " + data.list[8].main.humidity + "%")
      imgEl2.attr("src", "http://openweathermap.org/img/w/" + data.list[8].weather[0].icon + ".png")



      // Day 3 Information
      let tempEl3 = $("#temp-three")
      let windEl3 = $("#wind-three")
      let humidityEl3 = $("#humidity-three")
      let imgEl3 = $("#weather-icon-three")


      tempEl3.text("Temp: " + data.list[16].main.temp + "°C")
      windEl3.text("Wind Speed: " + Number(data.list[16].wind.speed*3.6).toFixed(2) + "km/h")
      humidityEl3.text("Humidity: " + data.list[16].main.humidity + "%")
      imgEl3.attr("src", "http://openweathermap.org/img/w/" + data.list[16].weather[0].icon + ".png")



      // Day 4 Information
      let tempEl4 = $("#temp-four")
      let windEl4 = $("#wind-four")
      let humidityEl4 = $("#humidity-four")
      let imgEl4 = $("#weather-icon-four")


      tempEl4.text("Temp: " + data.list[24].main.temp + "°C")
      windEl4.text("Wind Speed: " + Number(data.list[24].wind.speed*3.6).toFixed(2) + "km/h")
      humidityEl4.text("Humidity: " + data.list[24].main.humidity + "%")
      imgEl4.attr("src", "http://openweathermap.org/img/w/" + data.list[24].weather[0].icon + ".png")



      // Day 5 Information
      let tempEl5 = $("#temp-five")
      let windEl5 = $("#wind-five")
      let humidityEl5 = $("#humidity-five")
      let imgEl5 = $("#weather-icon-five")


      tempEl5.text("Temp: " + data.list[32].main.temp + "°C")
      windEl5.text("Wind Speed: " + Number(data.list[32].wind.speed*3.6).toFixed(2) + "km/h")
      humidityEl5.text("Humidity: " + data.list[32].main.humidity + "%")
      imgEl5.attr("src", "http://openweathermap.org/img/w/" + data.list[32].weather[0].icon + ".png")
    });
  }
  // Function for displaying the current time
  function currentTime() {
    const today = dayjs()
    $("#current-date").text(today.format("dddd, D MMM YYYY"))
  }

  // When a city is submitted it runs needed functions
  $("#city-search-form").on("submit", function(e) {
    e.preventDefault();
    let city = $("#city").val();
    getForecast(city);
    getCurrentWeather(city);
  })





})

