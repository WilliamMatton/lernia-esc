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

    sheet.insertRule(
        `.backgroundAnimation::before {
            content: "";
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1;
            animation-name: backgroundFadeOut;
            animation-duration: 0.1s;
            animation-fill-mode: both;
        }`
        , sheet.cssRules.length
    );

    sheet.insertRule(
        `@keyframes backgroundFadeOut {
            100% {
                background: rgba(255, 255, 255, 0.6);
            }
        }`,
        sheet.cssRules.length
    );

    sheet.insertRule(
        `.scrollLock {
            height: 100%;
            overflow: hidden;
        }`
        , sheet.cssRules.length
    );

    CreateMobileNavMenuRules();
});

function CreateMobileNavMenuRules() {
    sheet.insertRule(
        `.header__mobileMenu {
            width: 51px;
            height: 32px;
            margin: 27px 20px 0 auto;
        }`
        , 4
    );

    sheet.insertRule(
        `@media screen and (min-width: 800px) {
            .header__mobileMenu {
                display: none;
            }
        }`
        , 5
    );

    const navMenuRule = sheet.cssRules[6];
    navMenuRule.style.setProperty("width", "calc(100vw - 40px)");
    navMenuRule.style.setProperty("height", "calc(100vh - 40px)");
    navMenuRule.style.setProperty("display", "none");
    navMenuRule.style.setProperty("position", "fixed");
    navMenuRule.style.setProperty("top", "0");
    navMenuRule.style.setProperty("left", "0");
    navMenuRule.style.setProperty("gap", "50px");
    navMenuRule.style.setProperty("justify-content", "center");
    navMenuRule.style.setProperty("align-items", "center");
    navMenuRule.style.setProperty("margin", "20px 20px");
    navMenuRule.style.setProperty("font-size", "36px");
    navMenuRule.style.setProperty("font-weight", "bold");
    navMenuRule.style.setProperty("background-color", "#011827");
    navMenuRule.style.setProperty("box-shadow", "0px 0px 20px rgba(0, 0, 0, 0.4)");
    navMenuRule.style.setProperty("z-index", "2");

    sheet.insertRule(
        `@media screen and (max-height: 400px) {
            .nav {
                font-size: 30px;
                gap: 5%;
            }
        }`
        , 7
    );

    sheet.insertRule(
        `.navAnimation {
            display: flex;
            flex-direction: column;
            opacity: 0;
            animation-name: navFadeIn;
            animation-fill-mode: both;
            animation-duration: 0.2s;
            animation-delay: 0.1s;
        }`
        , 8
    );

    sheet.insertRule(
        `@keyframes navFadeIn {
            0% {
                transform: scale(0.98);
            }
            100% {
                transform: scale(1);
                opacity: 100%;
            }
        }`
        , 9
    );

    sheet.insertRule(
        `.nav__closeButton {
            width: 40px;
            height: 40px;
            position: absolute;
            top: 0;
            right: 0;
            margin: 25px 25px;
        }`
        , 10
    );

    sheet.insertRule(
        `@media screen and (min-width: 800px) {
            .nav__closeButton {
                display: none;
            }
        }`
        , 11
    );

    sheet.insertRule(
        `.buttonAnimation {
            opacity: 0%;
            animation-name: buttonFadeIn;
            animation-duration: 0.1s;
            animation-delay: 0.2s;
            animation-fill-mode: both;
        }`
        , 12
    );

    sheet.insertRule(
        `@keyframes buttonFadeIn {
            100% {
                opacity: 100%;
            }
        }`
        , 13
    );
}

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