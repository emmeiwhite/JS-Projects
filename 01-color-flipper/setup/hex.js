const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const body = document.body;
const button = document.getElementById("btn");
const span = document.querySelector(".color");

button.addEventListener("click", (e) => {
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += getRandomArrayValue();
  }
  body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
});

function getRandomArrayValue() {
  const randomValue = hex[Math.floor(Math.random() * hex.length)];
  return randomValue;
}
