let api = `https://v6.exchangerate-api.com/v6/a0b3d3d9fbbe1d48d310997e/latest/USD`;
const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

//Create dropdown from the currencies array
currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  fromDropDown.add(option);
});


//Repeat same thing for the other dropdown
currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  toDropDown.add(option);
});

//Setting default values
fromDropDown.value = "USD";
toDropDown.value = "RUB";

let convertCurrency = () => {
  //Create References
  const amount = document.querySelector("#amount").value;
  const fromCurrency = fromDropDown.value;
  const toCurrency = toDropDown.value;

  //If amount input field is not empty
  if (amount.length != 0) {
    fetch(api)
      .then((resp) => resp.json())
      .then((data) => {
        let fromExchangeRate = data.conversion_rates[fromCurrency];
        let toExchangeRate = data.conversion_rates[toCurrency];
        const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
        result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
          2
        )} ${toCurrency}`;
      });
  } else {
    alert("Please fill in the amount");
  }
};

document
  .querySelector("#convert-button")
  .addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);

const selected1 = document.querySelector(
  ".select-box:nth-of-type(1) .selected"
);
const optionsContainer1 = document.querySelector(
  ".select-box:nth-of-type(1) .options-container"
);
const optionsList1 = document.querySelectorAll(
  ".select-box:nth-of-type(1) .option"
);
selected1.innerHTML = optionsList1[0].querySelector("label").innerHTML;
selected1.addEventListener("click", () => {
  optionsContainer1.classList.toggle("active");
});
optionsList1.forEach((o) => {
  o.addEventListener("click", () => {
    selected1.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer1.classList.remove("active");
  });
});

const selected2 = document.querySelector(
  ".select-box:nth-of-type(2) .selected"
);
const optionsContainer2 = document.querySelector(
  ".select-box:nth-of-type(2) .options-container"
);
const optionsList2 = document.querySelectorAll(
  ".select-box:nth-of-type(2) .option"
);
selected2.innerHTML = optionsList2[0].querySelector("label").innerHTML;
selected2.addEventListener("click", () => {
  optionsContainer2.classList.toggle("active");
});
optionsList2.forEach((o) => {
  o.addEventListener("click", () => {
    selected2.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer2.classList.remove("active");
  });
});


