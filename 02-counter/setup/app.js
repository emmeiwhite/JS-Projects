const buttons = document.querySelectorAll(".btn");
const count = document.getElementById("value");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.textContent.toLowerCase() === "decrease") {
      count.textContent = parseInt(count.textContent) - 1;
      count.style.color = "red";
    } else if (e.target.textContent.toLowerCase() === "reset") {
      count.textContent = 0;
      count.style.color = "orange";
    } else {
      count.textContent = parseInt(count.textContent) + 1;
      count.style.color = "green";
    }
  });
});
