import "./style.css";
import { pageLoadDisplay } from "./pageload";
import { homeDisplay } from "./home";
import { menuDisplay } from "./menu";
import { contactDisplay } from "./contact";

const container = document.querySelector("#content");
container.appendChild(pageLoadDisplay.createHeader());
container.appendChild(menuDisplay.createMain());
const navButtons = document.querySelector("nav").querySelectorAll("button");
console.log(navButtons);

navButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const main = document.querySelector("main");
    e.target.classList.add("active");
    navButtons.forEach((btn) => {
      if (btn != e.target) {
        btn.classList.remove("active");
      }
    });
    container.removeChild(main);
    if (e.target.textContent == "Menu") {
      container.appendChild(menuDisplay.createMain());
    } else if (e.target.textContent == "Home") {
      container.appendChild(homeDisplay.createMain());
    } else if (e.target.textContent == "Contact") {
      container.appendChild(contactDisplay.createMain());
    }
  });
});
