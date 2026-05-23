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
  displayBusiness(data.business)
  console.log(data.business); 
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