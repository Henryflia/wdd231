// Join Html

const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);
console.log(searchParams.get("foo"));

const modal = document.querySelector(".modal");
console.log(modal)
const openModal = document.querySelector(".openmodal");
const closeModal = document.querySelector(".closemodal")

if (openModal) {
    openModal.addEventListener("click", () => {
  modal.showModal()
});

}

if (closeModal) {
    closeModal.addEventListener("click", () => {
  modal.close();
});
}

