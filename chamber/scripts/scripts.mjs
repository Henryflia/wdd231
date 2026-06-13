import discovery from "../data/discovery.mjs";


const card = document.querySelector(".disc")

discovery.forEach(place => { 
    const section = document.createElement('section');

    section.innerHTML = `
    <img class="effects" src="images/${place.image}" alt="${place.name}" width="300" height="200">
    <h2>${place.name}</h2>
    <span class="listc"><strong>ADDRESS:</strong> ${place.address}</span>
    <p>${place.description}</p>
    `;
    card.appendChild(section);
  });

const lastvisit = localStorage.getItem("lastview")
const title = document.querySelector(".mss");
const date = Date.now();
if (!lastvisit) {
    title.innerHTML ="Welcome! Let us know if you have any questions."
}
else {
    const dayb = Math.floor((date - Number(lastvisit)) / (1000 * 60 * 60 * 24));
    console.log(dayb)
    if (dayb < 1) {
        title.textContent = "Back so soon! Awesome!";
    }

    else {

        if (dayb = 1) {
            title.innerHTML =  `You last visited ${dayb} day ago.`
        }
        else {
            title.innerHTML =  `You last visited ${dayb} days ago.`
        }
        
    }
}

localStorage.setItem("lastview", date)

