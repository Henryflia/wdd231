export function initNav() {
    
    const hamButton = document.getElementById("menu");
    const navigator = document.querySelector(".navigation");

    if (hamButton && navigator) {
        hamButton.addEventListener("click", () => {
        navigator.classList.toggle("open");
        hamButton.classList.toggle("open");
    })
    }

}

export function currentYear() {
    const year = document.querySelector("#currentyear");
    const today = new Date;
    year.innerHTML = `<span class="year">${today.getFullYear()}</span>`;

    document.getElementById("lastModified").innerHTML = document.lastModified;
}

