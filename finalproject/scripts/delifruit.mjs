import { initNav, currentYear } from "./nav.mjs";
import { subcribeForm, reviewPage } from "./form.mjs";
import { initModal, loadFoods } from "./food.mjs";

initNav();
currentYear();

if (document.querySelector(".food")) {
  initModal();
  loadFoods();
}

subcribeForm();

reviewPage()