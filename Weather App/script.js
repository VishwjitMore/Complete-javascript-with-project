const city = document.getElementById("city-input");
const button = document.getElementById("search-btn");
const error = document.getElementById("error-msg");
button.addEventListener("click", function (e) {
    e.preventDefault();
    if (city.value.trim() == '') {
        error.innerHTML = "Alert: Please enter city name";
    }
    else {
        error.innerHTML = '';
        async function getWeather(city) {
            try {
            const cityName = document.getElementById("city-name");
            const temperature = document.getElementById("temperature");
            const description = document.getElementById("description");
            const weatherIcon = document.getElementById("weather-icon");
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=89ecbe1ac5f389cdb1ada9cf69269502&units=metric`);
                if(!response.ok){
                    cityName.innerHTML='';
                    temperature.innerHTML='';
                    description.innerHTML='';
                    weatherIcon.innerHTML='';
                    error.innerHTML = "Alert: Please enter valid city name";
                    return ;
                }
            const data = await response.json();
            cityName.innerHTML=data.name;
            temperature.innerHTML=`${data.main.temp} °C`;
            description.innerHTML=data.weather[0].description;
            weatherIcon.innerHTML=data.weather[0].icon;
                
            }
            catch (error) {
                console.log(error);
                error.innerHTML="something went wrong";
            }
        }
        getWeather(city.value);
    }
})