// main.js
import clearCart, { addItem, getCart } from "./cart.js";

const output = document.getElementById("output");
const cartList = document.getElementById("cart");

document.getElementById("addApple").addEventListener("click", () => {
  output.textContent = addItem("Apple");
  renderCart();
});

document.getElementById("addBanana").addEventListener("click", () => {
  output.textContent = addItem("Banana");
  renderCart();
});

document.getElementById("clearCart").addEventListener("click", () => {
  output.textContent = clearCart();
  renderCart();
});

function renderCart() {
  const items = getCart();
  cartList.innerHTML = "";
  if (items.length === 0) {
    cartList.innerHTML = "<li>(empty)</li>";
  } else {
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      cartList.appendChild(li);
    });
  }
}

// initial render
renderCart();
