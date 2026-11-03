const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");

 async function checkWeather(city){
    const api_key = "f3e03119d31d159d83f9f856a00b543c";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data=await fetch(`${url}`).then(response =>
        response.json());
        //console.log(weather_data);

        temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}`;
        description.innerHTML = `${weather_data.weather[0].description}`;
        humidity.innerHTML = `${weather_data.main.humidity}%`;
        wind_speed.innerHTML = `${weather_data.wind.speed}km/H`;

        switch(weather_data.weather[0].main){
            case 'Clouds':
                weather_img.src="https://images.unsplash.com/photo-1542708993627-b6e5bbae43c4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D";
                break;
            case 'Clear':
                weather_img.src = "https://images.unsplash.com/photo-1542042179-ff8ef4a8254f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D";
                break;
            case 'Rain':
                weather_img.src = "https://images.unsplash.com/photo-1542890886-40c9094e352a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D";
                break;
            case 'Mist':
                weather_img.src = "https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D";
                break;
            case 'Snow':
                weather_img.src = "https://images.unsplash.com/file-1715652217532-464736461acbimage?w=416&dpr=2&auto=format&fit=crop&q=60";
            
        }

}

searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
})
