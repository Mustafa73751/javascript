// Base price in USD
const basePrice = 10;
const priceElement = document.getElementById("price");
const currencySymbol = document.getElementById("currency-symbol");
const currencySelect = document.getElementById("currency");

// Conversion rates (example)
const rates = {
  usd: { symbol: "$", rate: 1 },
  eur: { symbol: "€", rate: 0.92 },
  gbp: { symbol: "£", rate: 0.79 },
  kes: { symbol: "KSh", rate: 128 },
};

// onchange event listener
function changeCountry() {
  const selected = currencySelect.value;
  const conversion = rates[selected];

  // Update price and symbol
  priceElement.textContent = (basePrice * conversion.rate).toFixed(2);
  currencySymbol.textContent = conversion.symbol;
};
