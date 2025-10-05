// cart.js

let cart = [];

export function addItem(item) {
  cart.push(item);
  return `${item} added to cart.`;
}

export function getCart() {
  return cart;
}

export default function clearCart() {
  cart = [];
  return "Cart cleared!";
}
