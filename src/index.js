import "./style.css";
import { pageLoadDisplay } from "./pageload";
import { homeDisplay } from "./home";
import { menuDisplay } from "./menu";
import { contactDisplay } from "./contact";

const container = document.createElement("div");
container.id = "content";
document.body.appendChild(container);
container.appendChild(pageLoadDisplay.createHeader());
container.appendChild(menuDisplay.createMain());
const navButtons = document.querySelector("nav").querySelectorAll("button");

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
    addMainBtnEvent();
  });
});
addMainBtnEvent();

function addMainBtnEvent() {
  const mainBtn = document.querySelector(".main__btn");
  if (mainBtn)
    mainBtn.addEventListener("click", () => {
      container.removeChild(document.querySelector("main"));
      navButtons.forEach((btn) => {
        if (btn.textContent != "Menu") {
          btn.classList.remove("active");
        } else {
          btn.classList.add("active");
        }
      });
      container.appendChild(menuDisplay.createMain());
    });
}
