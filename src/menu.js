import sushi1 from "./sushi1.jpg";
import sushi2 from "./sushi2.png";
import sushi3 from "./sushi3.png";
const menuDisplay = (() => {
  const createMain = () => {
    const main = document.createElement("main");
    main.classList.add("main__menu");
    const container = document.createElement("div");

    container.appendChild(
      _createCard(sushi1, "Teriyaki", [
        "Salmon",
        "Rice",
        "Soy sauce",
        "wasabi",
        "srirarcha",
      ])
    );
    container.appendChild(
      _createCard(sushi2, "Rakuzi", [
        "Salmon",
        "Rice",
        "Soy sauce",
        "wasabi",
        "srirarcha",
      ])
    );
    container.appendChild(
      _createCard(sushi3, "Miami", [
        "Salmon",
        "Rice",
        "Soy sauce",
        "wasabi",
        "srirarcha",
      ])
    );

    container.classList.add("menu__container");

    main.appendChild(container);
    return main;
  };

  const _createCard = (bgImg, title, ingredients) => {
    let ing = `Ingredients: ${ingredients.join(", ")}`;
    const cardParent = document.createElement("div");
    cardParent.classList.add("menu__card-parent");

    const cardChild = document.createElement("div");
    cardChild.style.backgroundImage = "url('" + bgImg + "')";
    cardChild.classList.add("menu__card-child");

    const name = document.createElement("p");
    name.classList.add("card__title");
    name.textContent = title;
    cardChild.appendChild(name);

    const ingredientsPara = document.createElement("p");
    ingredientsPara.classList.add("card__ingredients");
    ingredientsPara.textContent = ing;
    cardChild.appendChild(ingredientsPara);

    cardParent.appendChild(cardChild);

    return cardParent;
  };
  return { createMain };
})();
export { menuDisplay };
