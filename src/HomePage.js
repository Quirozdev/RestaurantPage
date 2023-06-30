import RestaurantImg from "./restaurant-img.jpg";
import "./HomePage.css";

export default function HomePage(contentContainer) {
    const image = document.createElement("img");
    image.src = RestaurantImg;
    image.alt = "Restaurant image";
    image.classList.add("restaurant-img");

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");

    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Enchanted Palate";

    const restaurantInfo = document.createElement("p");
    restaurantInfo.classList.add("restaurant-info");
    restaurantInfo.textContent = 'Welcome to "Enchanted Palate" where culinary dreams come true! Nestled in the heart of a bustling city, our fictional restaurant is a captivating haven that enchants all your senses. Step inside and be embraced by an inviting ambiance, adorned with elegant decor and warm, soft lighting.';


    infoContainer.appendChild(restaurantName);
    infoContainer.appendChild(restaurantInfo);

    const flexContainer = document.createElement("div");
    flexContainer.classList.add("flex-container");
    flexContainer.appendChild(infoContainer);
    flexContainer.appendChild(image);

    contentContainer.appendChild(flexContainer);
}