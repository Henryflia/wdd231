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
    <span><strong>ADDRESS:</strong> ${bs.address}</span>
    <span><strong>URL:</strong> ${bs.website}</span>
    `;
    card.appendChild(section);
  })
};