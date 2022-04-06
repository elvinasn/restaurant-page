import sushi1 from "./sushi1.jpg";
import sushi2 from "./sushi2.png";
import sushi3 from "./sushi3.png";
const menuDisplay = (() => {
  const createMain = () => {
    const main = document.createElement("main");
    main.classList.add("main__menu");
    const container = document.createElement("div");

    container.appendChild(_createCard(sushi1));
    container.appendChild(_createCard(sushi2));
    container.appendChild(_createCard(sushi3));

    container.classList.add("menu__container");

    main.appendChild(container);
    return main;
  };

  const _createCard = (bgImg) => {
    const card = document.createElement("div");
    card.style.backgroundImage = "url('" + bgImg + "')";
    card.classList.add("menu__card");
    return card;
  };
  return { createMain };
})();
export { menuDisplay };
