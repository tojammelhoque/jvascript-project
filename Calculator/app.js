let input = document.getElementById("input");
let button = document.querySelectorAll("button");
let str = "";
let arr = Array.from(button);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      str = eval(str);
      input.value = str;
    } else if (e.target.innerHTML === "AC") {
      str = "";
      input.value = str;
    } else if (e.target.innerHTML === "DEL") {
      str = str.slice(0, -1);
      input.value = str;
    } else {
      str += e.target.innerHTML;
      input.value = str;
    }
  });
});
