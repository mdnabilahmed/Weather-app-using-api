async function city(name) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=58a86effaffcce194dae905c36101345`
  );

  let data = await response.json();
  console.log(data.wind.speed);

  document.querySelector(".city").innerHTML = name.toUpperCase();
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp - 273) + "°C";
  document.getElementsByClassName("humidity")[0].innerHTML = data.main.humidity;
  document.getElementsByClassName("wind")[0].innerHTML =
    data.wind.speed * 3.6 + " KM/h";
}

city("patna");
