const apiKey = "TU_API_KEY";

const lat = -12.0464;
const lon = -77.0428;


async function getWeather(){

    const url =
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;


    const response = await fetch(url);

    const data = await response.json();


    document.querySelector("#current-temp").innerHTML =
    `${data.list[0].main.temp}°C`;


    document.querySelector("#weather-desc").innerHTML =
    data.list[0].weather[0].description;


    let forecastHTML="";


    for(let i=0;i<3;i++){

        forecastHTML += `
        <p>
        ${data.list[i*8].dt_txt.substring(0,10)}
        :
        ${data.list[i*8].main.temp}°C
        </p>
        `;

    }


    document.querySelector("#forecast").innerHTML =
    forecastHTML;

}


getWeather();