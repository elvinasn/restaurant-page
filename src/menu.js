import sushi1 from "./sushi1.jpg";
import sushi2 from "./sushi2.png";
import sushi3 from "./sushi3.png";
import sushi4 from "./sushi4.png";
import sushi5 from "./sushi5.png";
import sushi6 from "./sushi6.png";
const menuDisplay = (() => {
  const createMain = () => {
    const main = document.createElement("main");
    main.classList.add("main__menu");
    const container = document.createElement("div");

    container.appendChild(
      _createCard(
        sushi1,
        "Teriyaki",
        ["Salmon", "Rice", "Soy sauce", "wasabi", "srirarcha"],
        7.99
      )
    );
    container.appendChild(
      _createCard(
        sushi2,
        "Rakuzi",
        ["Salmon", "Rice", "Soy sauce", "wasabi", "srirarcha"],
        6.99
      )
    );
    container.appendChild(
      _createCard(
        sushi3,
        "Miami",
        ["Salmon", "Rice", "Soy sauce", "wasabi", "srirarcha"],
        6.49
      )
    );
    container.appendChild(
      _createCard(
        sushi4,
        "Himlami",
        ["Salmon", "Rice", "Soy sauce", "wasabi", "srirarcha"],
        4.99
      )
    );
    container.appendChild(
      _createCard(
        sushi5,
        "Razani",
        ["Salmon", "Rice", "Soy sauce", "wasabi", "srirarcha"],
        5.49
      )
    );
    container.appendChild(
      _createCard(
        sushi6,
        "Cake",
        ["Salmon", "Rice", "Soy sauce", "wasabi", "srirarcha"],
        22.99
      )
    );

    container.classList.add("menu__container");

    main.appendChild(container);
    return main;
  };

  const _createCard = (bgImg, title, ingredients, price) => {
    const cardParent = document.createElement("div");
    cardParent.classList.add("menu__card-parent");

    const cardChild = document.createElement("div");
    cardChild.style.background = "url('" + bgImg + "') no-repeat center center";
    cardChild.classList.add("menu__card-child");

    const name = document.createElement("p");
    name.classList.add("card__title");
    name.textContent = title;
    cardChild.appendChild(name);

    const ingredientsPara = document.createElement("p");
    ingredientsPara.classList.add("card__ingredients");
    ingredientsPara.textContent = `Ingredients: ${ingredients.join(", ")}`;
    cardChild.appendChild(ingredientsPara);

    const priceobj = document.createElement("p");
    priceobj.textContent = `Price: ${price}EUR per meal `;
    priceobj.classList.add("card__price");
    cardChild.append(priceobj);

    cardParent.appendChild(cardChild);

    return cardParent;
  };
  return { createMain };
})();
export { menuDisplay };
