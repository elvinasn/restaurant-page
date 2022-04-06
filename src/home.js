const homeDisplay = (() => {
  const createMain = () => {
    const main = document.createElement("main");
    const welcome = document.createElement("p");
    welcome.classList.add("main__welcome");
    welcome.textContent = "WELCOME";
    main.appendChild(welcome);

    const welcomeMsg = document.createElement("p");
    welcomeMsg.classList.add("main__welcome-msg");
    welcomeMsg.textContent = "to the best sushi restaurant in Vilnius";
    main.appendChild(welcomeMsg);

    const btn = document.createElement("button");
    btn.classList.add("main__btn");
    btn.textContent = "GO TO MENU";
    main.appendChild(btn);
    return main;
  };
  return { createMain };
})();

export { homeDisplay };
