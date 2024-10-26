const inputBox = document.querySelector('.input-box')
const searchBtn = document.querySelector('#searchBtn')
const temperature = document.querySelector('.temperature')
const temperatureDescription = document.querySelector('.temperature-text')
const humidity = document.querySelector('.humidity-value')
const windSpeed = document.querySelector('.wind-speed-value')
const weather_img = document.querySelector('.weather-box img')
const weather_body = document.querySelector('.weather-body')
const location_not_found = document.querySelector('.location-not-find')

const cityName = localStorage.getItem("Location")

if(cityName){
    weather_data(cityName)
    inputBox.value = cityName
}

async function weather_data(city) {

    const apiKey = "476721e1d62ef211ecb84e514b3974b4"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    const promise = await fetch(url).then((Response) => Response.json())


    if(promise.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    location_not_found.style.display = "none";
    weather_body.style.display = "block";

    temperature.innerHTML = `${Math.round((promise.main.temp)-273.15)}<sup>°C</sup>`

    temperatureDescription.innerHTML = `${
        promise.weather[0].description
    }`

    humidity.innerHTML = `${promise.main.humidity}%`

    windSpeed.innerHTML = `${promise.wind.speed}`

    switch(promise.weather[0].main){
        case 'Clouds':
            weather_img.src = "./assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "./assets/clear.png";
            break;
        case 'Rain':
            weather_img.src = "./assets/rain.png";
            break;
        case 'Mist':
            weather_img.src = "./assets/mist.png";
            break;
        case 'Snow':
            weather_img.src = "./assets/snow.png";
            break;

    }
    console.log(promise.cod);
}

searchBtn.addEventListener("click" , () => {
    weather_data(inputBox.value)
    localStorage.setItem("Location",inputBox.value)
})

inputBox.addEventListener("keypress" , (e) => {
    if(e.key === 'Enter'){
        weather_data(inputBox.value)
        localStorage.setItem("Location",inputBox.value)
    }
})

