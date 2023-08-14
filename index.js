import fillingDataItems from "./menuItems.js";

fillingDataItems(); //For Menu

let total = 0;
document.addEventListener("click", (e) => {
  const totalAmount = document.querySelector(".total-amount");
  const restaurantFooter = document.getElementById("restaurant-footer");
  const orderPlaced = document.querySelector(".order-placed");
  const itemsOrdered = document.querySelector(".items-ordered");
  const cardDetailsContainer = document.querySelector(
    ".card-details-container"
  );
  // To fill the cart with Items Selected
  if (e.target.dataset.plus) {
    restaurantFooter.style.display = "block";
    orderPlaced.style.display = "none";

    itemsOrdered.innerHTML += `
    <div class="cart-item">
        <div>
            ${e.target.dataset.plus}
        </div>
        <div class = "remove">
            remove
        </div>
        <div class = "price">
            $${e.target.dataset.plus2}
        </div>

    </div>
    `;
    total += Number(e.target.dataset.plus2);
    totalAmount.innerHTML = `$${total}`;
  }

  // To Remove Items from the Cart
  if (e.target.classList.contains("remove")) {
    const cartItem = e.target.parentElement;
    const itemPrice = Number(
      cartItem.querySelector(".price").innerText.replace("$", "")
    );

    total -= itemPrice;
    totalAmount.innerHTML = `$${total}`;

    cartItem.remove();
  }
  if (!total) {
    restaurantFooter.style.display = "none";
  }
  if (e.target.dataset.completeBtn) {
    cardDetailsContainer.style.display = "block";
  }

  //For the POP-UP after the Payment
  document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault(); //To Stop the default function of FORM
    restaurantFooter.style.display = "none";
    cardDetailsContainer.style.display = "none";
    orderPlaced.style.display = "block";
    document.getElementById("order-placed-message").innerHTML = `Thanks, ${
      document.getElementById("name").value
    }! Your order is on its way!`;
    itemsOrdered.innerHTML = "";
    total = 0;
  });
});
