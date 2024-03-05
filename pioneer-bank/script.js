// Login button event handler

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transctionArea = document.getElementById("transction-area");
  transctionArea.style.display = "block";
});

// Deposit button event handler

const depositeBtn = document.getElementById("addDeposit");
depositeBtn.addEventListener("click", function () {
  // const depositAmount = document.getElementById("depositAmount").value;
  // const depositNumber = parseFloat(depositAmount);
  const depositNumber = getInputNumber("depositAmount");
  updateSpanText("currentDeposit", depositNumber);
  updateSpanText("currentBalance", depositNumber);
  document.getElementById("depositAmount").value = "";
});

// Withdraw button event handler

const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
  const withdrawAmount = getInputNumber("withdrawAmount");
  updateSpanText("currentWithdraw", withdrawAmount);
  updateSpanText("currentBalance", -1 * withdrawAmount);
  document.getElementById("withdrawAmount").value = "";
});

function getInputNumber(id) {
  const Amoutn = document.getElementById(id).value;
  const amountNumber = parseFloat(Amoutn);
  return amountNumber;
}

function updateSpanText(id, depositNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const total = depositNumber + currentNumber;
  document.getElementById(id).innerText = total;
}
