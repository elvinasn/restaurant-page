import "./style.css";
import { pageLoadDisplay } from "./pageload";

const container = document.querySelector("#content");

container.appendChild(pageLoadDisplay.createHeader());
