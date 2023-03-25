const form = document.querySelector('form');
const cityInput = document.querySelector('#city');
const weatherInfo = document.querySelector('#weather-info');

const API_KEY = '680b816f433600b76c6f458f27f87c3f';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const city = cityInput.value;
  getWeather(city);
});

async function getWeather(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    console.log('data++++++++++++++ ' + JSON.stringify(data));
    displayWeather(data);
  } catch (error) {
    console.error(error);
  }
}

function displayWeather(data) {
  const temperature = data.main.temp;
  const min_temp =data.main.temp_min;
  console.log('+++++++++++minimum_temp: '+ min_temp);
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;

  weatherInfo.innerHTML = `
    <h2>${data.name}</h2>
    <p>${temperature} &deg;C</p>
    <p>${description}</p>
    <img src="http://openweathermap.org/img/wn/${icon}.png" alt="${description}">
  `;
}
