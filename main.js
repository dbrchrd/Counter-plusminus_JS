const display_number = document.querySelector(".number");
const display_error = document.querySelector(".error");
const btn_decrease = document.querySelector("#button-decrease");
const btn_increase = document.querySelector("#button-increase");
const btn = document.querySelector(".buttons");
let counter = 0;

let m = () => {
  if (counter >= 0 && counter <= 9999) {
    if (counter != 0) {
      display_number.style.display = "block";
      display_error.style.display = "none";
      counter -= 1;
      display_number.innerHTML = counter;
    } else {
      display_number.style.display = "none";
      display_error.style.display = "block";
    }
  }
  console.log(counter);
}
let p = () => {
  if (counter >= 0 && counter <= 9999) {
    if (counter != 9999) {
      display_number.style.display = "block";
      display_error.style.display = "none";
      counter += 1;
      display_number.innerHTML = counter;
    } else {
      display_number.style.display = "none";
      display_error.style.display = "block";
    }
  }
  console.log(counter);
}
document.onkeydown = function(e) {
  if (e.key == "-" || e.key == "ArrowDown") {
    m();
  }
  if (e.key == "+" || e.key == "ArrowUp") {
    p();
  }
};
btn_decrease.onclick = () => {
  m();
}
btn_increase.onclick = () => {
  p();
}
