let count = 0;

const counterDisplay = document.getElementById("counter");
const incrementButton = document.getElementById("incrementButton");
const decrementButton = document.getElementById("decrementButton");

function updateCounter() {
  counterDisplay.textContent = count;
}

incrementButton.addEventListener("click", function () {
  count++;
  updateCounter();
});

decrementButton.addEventListener("click", function () {
  count--;
  updateCounter();
});
