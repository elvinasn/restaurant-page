const contactDisplay = (() => {
  const createMain = () => {
    const main = document.createElement("main");
    main.classList.add("main__contact");

    const container = document.createElement("div");
    container.classList.add("contact__container");

    const rightSide = document.createElement("div");
    rightSide.classList.add("contact__right");
    const leftSide = document.createElement("div");
    leftSide.classList.add("contact__left");

    const contactUs = document.createElement("p");
    contactUs.textContent = "Contact us";
    contactUs.classList.add("contact__header");
    leftSide.appendChild(contactUs);

    const phone = document.createElement("p");
    phone.textContent = "+360631123121";
    phone.classList.add("contact__text");
    leftSide.appendChild(phone);

    const email = document.createElement("p");
    email.textContent = "info@email.com";
    email.classList.add("contact__text");
    leftSide.appendChild(email);

    const address = document.createElement("p");
    address.textContent = "Address";
    address.classList.add("contact__header");
    address.classList.add("additional_margin");
    leftSide.appendChild(address);

    const address2 = document.createElement("p");
    address2.textContent = "Kirtimų g. 41, Vilnius";
    address2.classList.add("contact__text");
    leftSide.appendChild(address2);

    rightSide.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2309.947970443179!2d25.1251421875325!3d54.62252368590225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ddeccee3fd82c9%3A0x625bf2d61addbf36!2sKirtim%C5%B3%20g.%2041%2C%20Vilnius%2002244!5e0!3m2!1slt!2slt!4v1649270025244!5m2!1slt!2slt" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    container.appendChild(leftSide);
    container.appendChild(rightSide);
    main.appendChild(container);

    return main;
  };
  return { createMain };
})();

export { contactDisplay };
