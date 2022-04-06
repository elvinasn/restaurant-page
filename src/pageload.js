import icon from "./icon.svg";
const pageLoadDisplay = (() => {
  const createHeader = () => {
    const header = document.createElement("header");
    const container = document.createElement("div");
    container.classList.add("logo");

    const myIcon = new Image();
    myIcon.src = icon;
    container.appendChild(myIcon);

    const heading = document.createElement("h1");
    heading.textContent = "JOHN'S SUSHI";
    container.appendChild(heading);
    header.appendChild(container);

    header.appendChild(_createNav());
    return header;
  };
  const _createNav = () => {
    const nav = document.createElement("nav");

    const btn1 = document.createElement("button");
    btn1.textContent = "Home";
    btn1.classList.add("active");
    nav.appendChild(btn1);

    const btn2 = document.createElement("button");
    btn2.textContent = "Menu";
    nav.appendChild(btn2);

    const btn3 = document.createElement("button");
    btn3.textContent = "Contact";
    nav.appendChild(btn3);

    return nav;
  };

  return { createHeader };
})();
export { pageLoadDisplay };
