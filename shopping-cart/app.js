document.getElementById("case-increase").addEventListener("click", function () {
  // const caseInput = document.getElementById("case-quantity");
  // const caseCount = parseInt(caseInput.value);
  // const caseNewCount = caseCount + 1;
  // caseInput.value = caseNewCount;
  // document.getElementById("case-price").innerText = "$" + caseNewCount * 59;
  caseTotalHandle(true);
});

document.getElementById("case-decrease").addEventListener("click", function () {
  // const caseInput = document.getElementById("case-quantity");
  // const caseCount = parseInt(caseInput.value);
  // const caseNewCount = caseCount - 1;
  // caseInput.value = caseNewCount;
  // document.getElementById("case-price").innerText = "$" + caseNewCount * 59;
  caseTotalHandle(false);
});

function caseTotalHandle(isIncrease) {
  const caseInput = document.getElementById("case-quantity");
  const caseCount = parseInt(caseInput.value);
  if (isIncrease == true) {
    const caseNewCount = caseCount + 1;
    caseInput.value = caseNewCount;
    document.getElementById("case-price").innerText = "$" + caseNewCount * 59;
  } else if (caseCount > 0) {
    const caseNewCount = caseCount - 1;
    caseInput.value = caseNewCount;
    document.getElementById("case-price").innerText = "$" + caseNewCount * 59;
  }
  calculateTotal();
}

document
  .getElementById("phone-increase")
  .addEventListener("click", function () {
    // const phoneInput = document.getElementById("phone-quantity");
    // const phoneCount = parseInt(phoneInput.value);
    // const phoneNewCount = phoneCount + 1;
    // phoneInput.value = phoneNewCount;
    // document.getElementById("phone-price").innerText =
    //   "$" + phoneNewCount * 1219;
    phoneTotalHandle(true);
  });

document
  .getElementById("phone-decrease")
  .addEventListener("click", function () {
    // const phoneInput = document.getElementById("phone-quantity");
    // const phoneCount = parseInt(phoneInput.value);
    // const phoneNewCount = phoneCount - 1;
    // phoneInput.value = phoneNewCount;
    // document.getElementById("phone-price").innerText =
    //   "$" + phoneNewCount * 1219;
    phoneTotalHandle(false);
  });

function phoneTotalHandle(isIncrease) {
  const phoneInput = document.getElementById("phone-quantity");
  const phoneCount = parseInt(phoneInput.value);
  if (isIncrease == true) {
    const phoneNewCount = phoneCount + 1;
    phoneInput.value = phoneNewCount;
    document.getElementById("phone-price").innerText =
      "$" + phoneNewCount * 1219;
  } else if (phoneCount > 0) {
    const phoneNewCount = phoneCount - 1;
    phoneInput.value = phoneNewCount;
    document.getElementById("phone-price").innerText =
      "$" + phoneNewCount * 1219;
  }
  calculateTotal();
}

// function calculateTota() {
//   const caseInput = document.getElementById("case-quantity");
//   const caseCount = parseInt(caseInput.value);
//   const phoneInput = document.getElementById("phone-quantity");
//   const phoneCount = parseInt(phoneInput.value);
//   const subTotal = caseCount * 59 + phoneCount * 1219;
//   const tax = subTotal * 0.1;
//   const total = subTotal + tax;
//   document.getElementById("sub-total").innerText = "$" + subTotal;
//   document.getElementById("tax").innerText = "$" + tax;
//   document.getElementById("total").innerText = "$" + total;
// }

function calculateTotal() {
  const caseInput = document.getElementById("case-quantity");
  const caseCount = parseInt(caseInput.value);
  const phoneInput = document.getElementById("phone-quantity");
  const phoneCount = parseInt(phoneInput.value);
  const subTotal = caseCount * 59 + phoneCount * 1219;
  const tax = subTotal * 0.1;
  const total = subTotal + tax;
  document.getElementById("sub-total").innerText = "$" + subTotal;
  document.getElementById("tax").innerText = "$" + tax;
  document.getElementById("total").innerText = "$" + total;
}
