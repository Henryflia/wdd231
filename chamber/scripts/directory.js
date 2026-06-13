
const year = document.querySelector("#currentyear");
const today = new Date;
year.innerHTML = `<span class="year">${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = document.lastModified;



const hamButton = document.getElementById("menu");
const navigator = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigator.classList.toggle("open");
    hamButton.classList.toggle("open");
})

const card = document.querySelector("#business")

async function getData() {
  const response = await fetch('data/members.json');
  const data = await response.json(); 

  const filteredBusinees = data.business
    .filter(bs => bs.membershipLevel === 2 || bs.membershipLevel === 3)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  
  displayBusiness(filteredBusinees)
  console.log(filteredBusinees); 
}

getData();

const displayBusiness = (business) => {
  business.forEach((bs) => {
    const section = document.createElement('section');

    section.innerHTML = `
    <h2>${bs.name}</h2>
    <img src="images/${bs.image}" alt="${bs.name}" width="50" height="50">
    <span><strong>PHONE:</strong> ${bs.phone}</span>
    <span class="listc"><strong>ADDRESS:</strong> ${bs.address}</span>
    <span class="listc"><strong>URL:</strong> ${bs.website}</span>
    <a href="${bs.website}" target="_blank">Website</a>
    <span><strong>Membership Level: </strong> ${bs.membershipLevel}</span>
    `;
    card.appendChild(section);
  })
};


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article"); 


gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}


const weather = document.querySelector(".weather");
const desweather = document.querySelector(".description");
const temp = document.querySelector(".temp");
const graphic = document.querySelector(".graphic");
const weatherimg = document.querySelector(".weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=18.45&lon=-69.93&units=metric&appid=8b1c3cbf4e889a4658d9d8a02813f42f";

async function apiFetch(url) {
    try {
        const response = await fetch(url)
        if (response.ok) {
          const data = await response.json();
          displayResults(data)
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


function displayResults(data) {
  weather.innerHTML = data.name;
  desweather.innerHTML = data.weather[0].description;
  temp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  graphic.setAttribute("SRC", iconsrc)
  graphic.setAttribute("ALT", data.weather[0].description)
}

