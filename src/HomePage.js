import RestaurantImg from "./restaurant-img.jpg";

export default function HomePage() {
    const contentContainer = document.querySelector("#content");

    const image = document.createElement("img");
    image.src = RestaurantImg;
    image.alt = "Restaurant image";

    const restaurantName = document.createElement("h1");
    restaurantName.textContent = "Enchanted Palate";

    const restaurantInfo = document.createElement("p");
    restaurantInfo.textContent = 'Welcome to "Enchanted Palate" where culinary dreams come true! Nestled in the heart of a bustling city, our fictional restaurant is a captivating haven that enchants all your senses. Step inside and be embraced by an inviting ambiance, adorned with elegant decor and warm, soft lighting. The symphony of delightful aromas will guide you towards our open kitchen, where our talented chefs transform the freshest ingredients into edible masterpieces. Each dish is a harmonious blend of innovation and tradition, with flavors that dance on your palate and leave you craving for more. Our attentive staff, with their genuine smiles and expert knowledge, cater to your every need, ensuring a seamless dining experience. From intimate dinners to joyous celebrations, "Flavorsome Haven" is an oasis of culinary excellence, where every meal is an unforgettable journey through delectable delights. Join us and indulge in the wonderment that is our restaurant, where dreams become gastronomic reality.';

    contentContainer.appendChild(image);
    contentContainer.appendChild(restaurantName);
    contentContainer.appendChild(restaurantInfo);
}