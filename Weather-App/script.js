const apiKey = "3cbf0e257a6ed56c8d5b31f55166add2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const errorMessage = document.querySelector('.error-message');
const weatherDisplay = document.querySelector('.weather-display');

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();

  if (data.cod === 200) {
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind-speed').innerHTML = data.wind.speed + " km/hr";

    const weatherMain = data.weather[0].main.toLowerCase();
    switch (weatherMain) {
      case "clouds":
        weatherIcon.src = 'images/clouds.png';
        break;
      case "clear":
        weatherIcon.src = "images/clear.png";
        break;
      case "rain":
        weatherIcon.src = "images/rain.png";
        break;
      case "drizzle":
        weatherIcon.src = "images/drizzle.png";
        break;
      case "mist":
        weatherIcon.src = "images/mist.png";
        break;
      case "snow":
        weatherIcon.src = "images/snow.png";
        break;
      default:
        weatherIcon.src = "";
    }

    errorMessage.style.display = "none";
    weatherDisplay.style.display = "block";
  } else {
    errorMessage.style.display = "block";
    weatherDisplay.style.display = "none";
  }
}

searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value.trim());
});
