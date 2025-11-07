const root = document.querySelector("html");
const body = document.querySelector("body");
const main = document.querySelector("main");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
let menu;
let menuLinks = [];
let navMenuButton;
let closeButton;

let navMenuPopupMaxSize = window.matchMedia("(min-width: 800px)");

navMenuPopupMaxSize.addEventListener("change", () => {
    UpdateNavMenuVisibility(navMenuPopupMaxSize);
});

window.addEventListener("load", () => {
    menu = document.createElement("menu");
    main.prepend(menu);
    menu.classList.add("menu");

    for(i = 0; i < nav.children.length; i++) {
        const menuItem = document.createElement("li");
        menuItem.classList.add("menu__listItem");

        const link = document.createElement("a");
        menuLinks.push(link);
        menuLinks[i].href = "";
        menuLinks[i].classList.add("menu__link");
        menuLinks[i].innerText = nav.children[i].innerText;
        menuItem.appendChild(menuLinks[i]);
        menu.appendChild(menuItem);
    }

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
    closeButton.classList.add("menu__closeButton");
    closeButton.addEventListener("click", CloseNavMenu);
    menu.prepend(closeButton);
});

function UpdateNavMenuVisibility(width) {
    if(width.matches)
        CloseNavMenu();
}

function OpenNavMenu() {
    body.classList.add("backgroundAnimation");
    root.classList.add("scrollLock");

    menu.classList.add("menuAnimation");
    closeButton.classList.add("buttonAnimation");
}

function CloseNavMenu() {
    body.classList.remove("backgroundAnimation");
    root.classList.remove("scrollLock");

    menu.classList.remove("menuAnimation");
    closeButton.classList.remove("buttonAnimation");
}