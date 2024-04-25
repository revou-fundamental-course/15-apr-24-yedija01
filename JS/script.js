// time function
function getCurrentTime() {
  const dateTime = new Date();
  const hours = dateTime.getHours().toString().padStart(2, '0');
  const minutes = dateTime.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  return formattedHours + ':' + minutes + ' ' + ampm;
}

document.addEventListener("DOMContentLoaded", function() {
  const timeDisplay = document.getElementById("time-container");
  timeDisplay.innerHTML = getCurrentTime();
  
  // Update time every second
  setInterval(function() {
    timeDisplay.innerHTML = getCurrentTime();
  }, 1000);

  // Get references to input elements
  const temperature = document.querySelector(".temperature input");
  const result = document.querySelector(".result input");
  const inputTemperatureUnit = document.querySelector(".temperature select");
  const resultTemperatureUnit = document.querySelector(".result select");

  // Function to handle temperature conversion
  function convertTemperature() {
    let inputTemperatureUnitValue = inputTemperatureUnit.value;
    let resultTemperatureUnitValue = resultTemperatureUnit.value;

    // Temperature conversion logic
    let inputTemperatureValue = temperature.value;
    let convertTemperature = 0;

    if (inputTemperatureUnitValue === "Celsius" && resultTemperatureUnitValue === "Kelvin") {
      convertTemperature = parseFloat(inputTemperatureValue) + 273.15;
    } else if (inputTemperatureUnitValue === "Celsius" && resultTemperatureUnitValue === "Fahrenheit") {
      convertTemperature = (parseFloat(inputTemperatureValue) * 9 / 5) + 32;
    } else if (inputTemperatureUnitValue === "Kelvin" && resultTemperatureUnitValue === "Celsius") {
      convertTemperature = parseFloat(inputTemperatureValue) - 273.15;
    } else if (inputTemperatureUnitValue === "Kelvin" && resultTemperatureUnitValue === "Fahrenheit") {
      convertTemperature = (parseFloat(inputTemperatureValue) - 273.15) * 9 / 5 + 32;
    } else if (inputTemperatureUnitValue === "Fahrenheit" && resultTemperatureUnitValue === "Celsius") {
      convertTemperature = (parseFloat(inputTemperatureValue) - 32) * 5 / 9;
    } else if (inputTemperatureUnitValue === "Fahrenheit" && resultTemperatureUnitValue === "Kelvin") {
      convertTemperature = (parseFloat(inputTemperatureValue) - 32) * 5 / 9 + 273.15;
    } else if (inputTemperatureUnitValue === resultTemperatureUnitValue) {
      convertTemperature = parseFloat(inputTemperatureValue);
    }

    // Update result input field with converted temperature
    result.value = convertTemperature.toFixed(2);
  }

  // Add event listener to the convert button
  const convertButton = document.getElementById("convert-btn");
  convertButton.addEventListener("click", convertTemperature);
});
