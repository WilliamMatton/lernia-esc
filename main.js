const root = document.querySelector("html");
const body = document.querySelector("body");
const menu = document.querySelector(".menu");
const closeButton = document.querySelector(".menu__closeButton");
const menuButton = document.querySelector(".header__mobileMenu");

let navMenuPopupMaxSize = window.matchMedia("(min-width: 800px)");

navMenuPopupMaxSize.addEventListener("change", () => {
    UpdateNavMenuVisibility(navMenuPopupMaxSize);
});

menuButton.addEventListener("click", OpenNavMenu);
closeButton.addEventListener("click", CloseNavMenu);

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