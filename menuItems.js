import menuArray from "./data.js";
const items = document.querySelector(".items");

let restaurantItemsHTML = "";
const fillingDataItems = () => {
  menuArray.forEach((item) => {
    const { name, ingredients, id, price, emoji } = item;
    restaurantItemsHTML += `
            <div class="itemOfRestaurant">
                <div class="item-image-and-details">
                    <div class="itemImage">
                        <p>${emoji}</p>
                    </div>
                    <div class="itemDetails">
                        <h3>${name}</h3>
                        <p class="ingredients">${ingredients}</p>
                        <h3>$${price}</h3>
                    </div>
                </div>
                <div class="item-add-button">
                    <h3 class="plus-button" data-plus="${name}" data-plus2="${price}">+</h3>
                </div>
            </div>`;
  });
  items.innerHTML = restaurantItemsHTML;
};

export default fillingDataItems;
