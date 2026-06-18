let allFoods = [];

export async function loadFoods() {
  try {
    const response = await fetch("scripts/foods.json")
    allFoods = await response.json();
    renderTemples(allFoods)
    filterFood();
  } catch (err) {
    console.error("Failed to load food data:", err);
  }
  
}

export function renderTemples(food) {
  const container = document.querySelector(".food");
  if (!container) return;

  container.innerHTML = food.map((item) => `
    <article class="foodcart" tabindex="0" role="button" aria-label="View details for ${item.name}">
      <h2>${item.name}</h2>
      <figure>
        <img src="${item.image}" alt="${item.name}" loading="lazy" width="400" height="300">
      </figure>
      <p><strong>Vitamins:</strong> ${item.vitamins.join(", ")}</p>
      <p><strong>Best Time:</strong> ${item.bestTime}</p>
      <p><strong>Weight:</strong> ${item.weight}</p>
      <p><strong>Origin:</strong> ${item.origin}</p>
    </article>`
  ).join("");

  container.querySelectorAll(".foodcart").forEach((card, index) => {
    card.addEventListener("click", () => showModal(food[index]));
  });
}
export function filterFood() {
  const all = document.querySelector("#all");
  const fruits = document.querySelector("#fruits");
  const vege = document.querySelector("#vege");
  
    if (all) {
    all.addEventListener("click", (e) => {
      e.preventDefault();
      renderTemples(allFoods)
      })
  }


    if (fruits) {
    fruits.addEventListener("click", (e) => {
      e.preventDefault();
      renderTemples(allFoods.filter(food => {const fruitssec = food.type

        return fruitssec === "fruit";
      })
      )
    });
  }

  if (vege) {
    vege.addEventListener("click", (e) => {
      e.preventDefault();
      renderTemples(allFoods.filter(food => {
        const vegesec = food.type

        return vegesec === "vegetable";
      })
      )
    });
  }
}




function showModal(item) {
  const modal = document.getElementById("food-modal");
  if (!modal) return;

  modal.querySelector(".modal-title").textContent = item.name;
  modal.querySelector(".modal-image").src = item.image;
  modal.querySelector(".modal-image").alt = item.name;
  modal.querySelector(".modal-description").textContent = item.description;
  modal.querySelector(".modal-vitamins").textContent = item.vitamins.join(", ");
  modal.querySelector(".modal-calories").textContent = `${item.calories} kcal`;
  modal.querySelector(".modal-season").textContent = item.season;
  modal.querySelector(".modal-origin").textContent = item.origin;
  modal.querySelector(".modal-best-time").textContent = item.bestTime;
  modal.querySelector(".modal-weight").textContent = item.weight;

  modal.showModal();
  modal.querySelector(".modal-close").focus();
}

export function initModal() {
  const modal = document.getElementById("food-modal");
  if (!modal) return;

  modal.querySelector(".modal-close").addEventListener("click", () => {
    modal.close();
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.close();
  });
}
