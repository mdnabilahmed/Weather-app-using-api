const images = [
  "./images/sunny.png",
  "./images/rain.png",
  "./images/cloud.png",
  "./images/thunder.png",
];

async function city(name) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=58a86effaffcce194dae905c36101345`
  );

  let data = await response.json();

  document.querySelector(".city").innerHTML = name.toUpperCase();
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp - 273) + "°C";
  document.getElementsByClassName("humidity")[0].innerHTML = data.main.humidity;
  document.getElementsByClassName("wind")[0].innerHTML =
    data.wind.speed * 3.6 + " KM/h";

  let value = data.weather[0].main;
  let wedh = document.getElementsByClassName("weather-icon")[0];

  console.log(value);

  if (value === "Clouds") {
    wedh.src = "images/clouds.png";
  } else if (value === "Clear") {
    wedh.src = "images/clear.png";
  } else if (value === "Rain") {
    wedh.src = "images/rain.png";
  } else if (value === "Wind") {
    wedh.src = "images/wind.png";
  } else {
    wedh.src = "images/snow.png";
  }
}

city("Ichhāwar");
