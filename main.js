const sheet = document.styleSheets[1];
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
let navMenuButton;
let closeButton;

let navMenuPopupMaxSize = window.matchMedia("(min-width: 800px)");

navMenuPopupMaxSize.addEventListener("change", () => {
    UpdateNavMenuVisibility(navMenuPopupMaxSize);
});

window.addEventListener("load", () => {
    navMenuButton = document.createElement("input");
    navMenuButton.type = "image";
    navMenuButton.src = "resources/hamburgermenu.png";
    navMenuButton.alt = "Hamburger menu button";
    navMenuButton.classList.add("header__mobileMenu");
    header.appendChild(navMenuButton);

    closeButton = document.createElement("input");
    closeButton.type = "image";
    closeButton.src = "resources/close.png";
    closeButton.alt = "Close button";
    closeButton.classList.add("nav__closeButton");
    nav.prepend(closeButton);

    CreateMobileNavMenuRules();
    UpdateNavMenuVisibility(navMenuPopupMaxSize);
});

function CreateMobileNavMenuRules() {
    sheet.insertRule(
        ".header__mobileMenu { width: 51px; height: 32px; margin: 27px 20px 0 auto; }", 4
    );

    sheet.insertRule(
        "@media screen and (min-width: 800px) { .header__mobileMenu { display: none; } }", 5
    );
}

function UpdateNavMenuVisibility(width) {
    
}