function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor())

const body = document.body;
const button = document.querySelector(".change-color")
const colorCode = document.querySelector(".color")
// console.log(button)

button.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorCode.textContent = randomColor;
})

