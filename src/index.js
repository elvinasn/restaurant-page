import "./style.css";
import { pageLoadDisplay } from "./pageload";
import { homeDisplay } from "./home";

const container = document.querySelector("#content");
container.appendChild(pageLoadDisplay.createHeader());
container.appendChild(homeDisplay.createMain());
