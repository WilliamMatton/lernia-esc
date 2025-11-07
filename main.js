const sheet = document.styleSheets[1];
const root = document.querySelector("html");
const body = document.querySelector("body");
const main = document.querySelector(".app");
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
    navMenuButton.addEventListener("click", OpenNavMenu);
    header.appendChild(navMenuButton);

    closeButton = document.createElement("input");
    closeButton.type = "image";
    closeButton.src = "resources/close.png";
    closeButton.alt = "Close button";
    closeButton.classList.add("nav__closeButton");
    closeButton.addEventListener("click", CloseNavMenu);
    nav.prepend(closeButton);
});

function UpdateNavMenuVisibility(width) {
    if(width.matches)
        CloseNavMenu();
}

function OpenNavMenu() {
    body.classList.add("backgroundAnimation");
    root.classList.add("scrollLock");

    nav.classList.add("navAnimation");
    closeButton.classList.add("buttonAnimation");
}

function CloseNavMenu() {
    body.classList.remove("backgroundAnimation");
    root.classList.remove("scrollLock");

    nav.classList.remove("navAnimation");
    closeButton.classList.remove("buttonAnimation");
}