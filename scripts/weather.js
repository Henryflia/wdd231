const weather = document.querySelector("#current-temp");
const weatherimg = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=18.45&lon=-69.93&units=metric&appid=8b1c3cbf4e889a4658d9d8a02813f42f";

async function apiFetch(url) {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        }
        else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error)
    }
}

apiFetch(url);