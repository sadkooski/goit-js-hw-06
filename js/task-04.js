const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')
const newValue = document.querySelector("#value")
let counterValue = 0;

const incrementClick = () => {newValue.textContent = counterValue ++ 1};
const decrementClick = () => {newValue.textContent = counterValue -- 1};

incrementBtn.addEventListener("click", incrementClick)
decrementBtn.addEventListener("click", decrementClick)

newValue.textContent = `${counterValue}`;