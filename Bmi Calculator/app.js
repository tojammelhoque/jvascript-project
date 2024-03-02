const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    results.innerText = "Please provide valid data";
  } else {
    results.innerText = `Your BMI is ${(
      weight /
      ((height * height) / 10000)
    ).toFixed(2)}`;
  }
});
