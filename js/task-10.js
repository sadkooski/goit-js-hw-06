const input = document.querySelector('[type="number"]');
// console.log(input)
const create = document.querySelector('[data-create]');
// console.log(create)
const destroy = document.querySelector('[data-destroy]');
// console.log(destroy)
const boxes = document.querySelector("#boxes")
// console.log(boxes)


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


function createBoxes(amount) {
amount = Number(this.value);
    // console.log(amount)
 create.addEventListener('click', () => {
    let totalSize = 20;
    for (let i = 0; i <= amount - 1; i += 1) { 
    totalSize += 10;
    let newDiv = document.createElement("div");
    newDiv.style.width = totalSize.toString() + "px";
    newDiv.style.height = totalSize.toString() + "px";
    newDiv.style.backgroundColor = getRandomHexColor();
    boxes.append(newDiv);
   
}; 
});
}

function destroyBoxes() {
 boxes.innerHTML = '';   
}

input.addEventListener('input', createBoxes);
destroy.addEventListener('click', destroyBoxes);


