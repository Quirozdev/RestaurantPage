import "./MenuPage.css";

class MenuItem {
    constructor(name, img, description, price) {
        this.name = name;
        this.img = img;
        this.description = description;
        this.price = price;
    }
}

function createMenuItemCard(menuItem) {
    const menuItemCard = document.createElement("div");
    menuItemCard.classList.add("menu-item");

    const menuItemImgElem = document.createElement("img");
    menuItemImgElem.classList.add("menu-item-img");
    menuItemImgElem.src = menuItem.img;
    menuItemImgElem.alt = menuItem.name;

    const menuItemNameElem = document.createElement("p");
    menuItemNameElem.classList.add("menu-item-name");
    menuItemNameElem.textContent = menuItem.name;

    const menuItemDescElem = document.createElement("p");
    menuItemDescElem.classList.add("menu-item-desc");
    menuItemDescElem.textContent = menuItem.description;

    const menuItemPrice = document.createElement("p");
    menuItemPrice.classList.add("menu-item-price");
    menuItemPrice.textContent = menuItem.price;

    menuItemCard.appendChild(menuItemImgElem);
    menuItemCard.appendChild(menuItemNameElem);
    menuItemCard.appendChild(menuItemDescElem);
    menuItemCard.appendChild(menuItemPrice);

    return menuItemCard;
}

export default function MenuPage(contentContainer) {
    const menuTitle = document.createElement("h2");
    menuTitle.textContent = "Menu";
    menuTitle.classList.add("menu-title");

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-list");

    const menuItem1 = new MenuItem(
        "Steakhouse Ribeye",
        "https://cdn.shopify.com/s/files/1/0312/7695/7740/articles/steakhouse-ribeye-163485.jpg?v=1674665852",
        "A mouthwatering, juicy ribeye steak cooked to perfection. This cut of beef is known for its marbling, tenderness, and rich flavor. It's often grilled or pan-seared to create a delicious char on the outside while maintaining a tender, medium-rare or medium interior.",
        50
    );

    const menuItem2 = new MenuItem(
        "Margherita Pizza",
        "https://www.abeautifulplate.com/wp-content/uploads/2015/08/the-best-homemade-margherita-pizza-1-4-500x500.jpg",
        "A traditional Italian pizza that features a thin, crispy crust topped with simple yet flavorful ingredients. It typically includes fresh mozzarella cheese, ripe tomatoes, fragrant basil leaves, and a drizzle of olive oil.",
        35
    );
    const menuItem3 = new MenuItem(
        "Chicken Alfredo Pasta",
        "https://thecozycook.com/wp-content/uploads/2022/08/Chicken-Alfredo-Pasta-1-1.jpg",
        "A comforting and creamy pasta dish that combines tender pieces of grilled or sautéed chicken with fettuccine noodles and a luscious Alfredo sauce. The sauce is made with butter, heavy cream, Parmesan cheese, and garlic, resulting in a smooth, velvety texture.",
        65
    );

    const menuItem4 = new MenuItem(
        "Chocolate Lava Cake",
        "https://preppykitchen.com/wp-content/uploads/2022/03/Chocolate-Lava-Cake-Recipe.jpg",
        "A delectable dessert that features a warm, moist chocolate cake with a gooey, melted chocolate center. The cake is usually made with high-quality dark chocolate and baked until the edges are set while the center remains delightfully molten.",
        99
    );

    [menuItem1, menuItem2, menuItem3, menuItem4].forEach((menuItem) => {
        menuContainer.appendChild(createMenuItemCard(menuItem));
    });

    contentContainer.appendChild(menuTitle);
    contentContainer.appendChild(menuContainer);
}

