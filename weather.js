async function city(name) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=58a86effaffcce194dae905c36101345`
    );

    const data = await response.json();

    if (!response.ok || data.cod === "404" || !data.main) {
      alert("No city named like this found!!!!");
      return;
    }

    document.querySelector(".city").innerHTML = name.toUpperCase();
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp - 273) + "°C";
    document.getElementsByClassName("humidity")[0].innerHTML =
      data.main.humidity + "%";
    document.getElementsByClassName("wind")[0].innerHTML =
      (data.wind.speed * 3.6).toFixed(1) + " KM/h";

    let value = data.weather[0].main;
    let wedh = document.getElementsByClassName("weather-icon")[0];

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
  } catch (error) {
    console.error("API Error:", error);
    alert("try again.");
  }
}

const input = document.querySelector(".input");
const button = document.querySelector(".btn");


function searchCity() {
  const value = input.value.trim();
  if (value) {
    city(value);
  } else {
    alert("❗ Please enter a city name");
  }
}


button.addEventListener("click", searchCity);


input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchCity();
  }
});
