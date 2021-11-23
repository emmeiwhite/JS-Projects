const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const body = document.body;
const button = document.getElementById("btn");
const span = document.querySelector(".color");

button.addEventListener("click", (e) => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
});
