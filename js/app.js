// api key 6e687d49006e39bc63493339b6f16fa8

const searchWeather = () => {
 const searchInput = document.getElementById("search-input");
 const searchValue = searchInput.value;
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=6e687d49006e39bc63493339b6f16fa8`;

 fetch(url)
  .then((res) => res.json())
  .then((data) => displayWeather(data));
};

const displayWeather = (data) => {
 console.log(data);
 const cityName = document.getElementById("city-name");
 const temp = document.getElementById("temp");
 const weather = document.getElementById("weather");

 const displayIcon = document.getElementById("weather-icon");
 if (data.name == undefined) {
  cityName.innerText = "Please Enter a valid city";
 } else {
  cityName.innerText = data.name;
  temp.innerText = data.main.temp;
  const icon = data.weather[0].icon;
  weather.innerText = data.weather[0].main;
  displayIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
 }
};
