const display_number = document.querySelector(".number");
const btn_decrease = document.querySelector("#button-decrease");
const btn_increase = document.querySelector("#button-increase");
const btn = document.querySelector(".buttons");
let counter = 0;

btn_decrease.onclick = () => {
  console.log(counter);
  if (counter >= 0 && counter <= 9999) {
    if (counter != 0) {
      counter -= 1;
      display_number.innerHTML = counter;
    }
  }
}
btn_increase.onclick = () => {
  console.log(counter);
  if (counter >= 0 && counter <= 9999) {
    if (counter != 9999) {
      counter += 1;
      display_number.innerHTML = counter;
    }
  }
}
