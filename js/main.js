// Selecting DOM elements
const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

// Swap the conversion units between Celsius and Fahrenheit
const swap = () => {
  if (one.textContent === "°C") {
    one.textContent = "°F";
    two.textContent = "°C";
    result.textContent = "";
  } else {
    one.textContent = "°C";
    two.textContent = "°F";
    result.textContent = "";
  }
};

// Convert Celsius to Fahrenheit
const fahrToCel = () => {
  const fahrenheit = converter.value * 1.8 + 32;
  result.textContent = `${converter.value} °C to ${fahrenheit} °F`;
  converter.value = "";
};

// Convert Fahrenheit to Celsius
const celToFahr = () => {
  const celsius = (converter.value - 32) / 1.8;
  result.textContent = `${converter.value} °F to ${celsius} °C`;
  converter.value = "";
};

// Determine conversion based on the current unit and perform the conversion
const conversion = () => {
  if (converter.value !== "") {
    if (one.textContent === "°C") {
      fahrToCel();
    } else {
      celToFahr();
    }
  } else {
    result.textContent = "Musisz podać jakąś wartość!";
  }
};

// Reset input and result fields
const reset = () => {
  converter.value = "";
  result.textContent = "";
};

// Event Listeners for buttons
changeBtn.addEventListener("click", swap);
convBtn.addEventListener("click", conversion);
resetBtn.addEventListener("click", reset);
