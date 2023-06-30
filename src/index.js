import "./index.css";

import HomePage from "./HomePage";
import MenuPage from "./MenuPage";
import ContactPage from "./ContactPage";

function setCurrentPage(navButton) {
    navButton.classList.add("selected");
    const pageId = navButton.getAttribute("id");
    const contentContainer = document.querySelector("#content");
    contentContainer.innerHTML = "";
    if (pageId === "home") {
        return HomePage(contentContainer);
    }
    if (pageId === "menu") {
        return MenuPage(contentContainer);
    }
    if (pageId === "contact") {
        return ContactPage(contentContainer);
    }
}

(function createHeader() {
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const linksList = document.createElement("ul");

    const homeListItem = document.createElement("li");
    const homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    homeButton.classList.add("nav-button");
    homeButton.setAttribute("id", "home");
    homeListItem.appendChild(homeButton);

    const menuListItem = document.createElement("li");
    const menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.classList.add("nav-button");
    menuButton.setAttribute("id", "menu");
    menuListItem.appendChild(menuButton);

    const contactListItem = document.createElement("li");
    const contactButton = document.createElement("button");
    contactButton.textContent = "Contact";
    contactButton.classList.add("nav-button");
    contactButton.setAttribute("id", "contact");
    contactListItem.appendChild(contactButton);
    
    linksList.appendChild(homeListItem);
    linksList.appendChild(menuListItem);
    linksList.appendChild(contactListItem);

    nav.appendChild(linksList);

    header.appendChild(nav);

    document.body.prepend(header);
})();

(function initializeNavButtons() {
    const navButtons = document.querySelectorAll(".nav-button");
    navButtons.forEach((navButton) => {
        navButton.addEventListener("click", (event) => {
            const selectedBtn = document.querySelector(".selected");
            if (selectedBtn) {
                selectedBtn.classList.remove("selected");
            }
            setCurrentPage(event.target);
        });
    });
})();


setCurrentPage(document.querySelector("#home"));