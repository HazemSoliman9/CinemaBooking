const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
let count = document.getElementById("count");
const total = document.getElementById("total");
const movie = document.getElementById("movie");
let ticketPrice = +movie.value;

console.log(movie.value);
movie.addEventListener("change", function (e) {
  ticketPrice = +e.target.value;
  updateSelectionCount();
});
function updateSelectionCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

container.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectionCount();
  }
});
