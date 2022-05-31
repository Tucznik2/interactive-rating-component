const RATING_BUTTONS = document.querySelectorAll(".rating-button");
const SUBMIT_BUTTON = document.getElementById("submit-button");
const RATE = document.getElementById("rate");

RATING_BUTTONS.forEach((button) => {
  button.addEventListener("click", (e) => {
    RATING_BUTTONS.forEach((button) => {
      button.classList.remove("rating-button-selected");
    });
    e.target.classList.add("rating-button-selected");
  });
});

SUBMIT_BUTTON.addEventListener("click", () => {
  const selectedRate = document.querySelector(".rating-button-selected");
  if (selectedRate) {
    const RATING_STATE = document.getElementsByClassName("rating-state");
    const THANK_STATE = document.getElementsByClassName("thank-state");
    RATING_STATE[0].classList.add("invisible");
    THANK_STATE[0].classList.remove("invisible");
    RATE.textContent = `You selected ${selectedRate.value} our of 5`;
  }
});
