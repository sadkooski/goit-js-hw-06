const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = 
document.querySelector("#ingredients");
console.log(typeof list)

const array = [];

ingredients.forEach((ingredient) => {
 const element = document.createElement("li");
 element.textContent = ingredient;
 element.classList.add("item")
 array.push(element)
});

 list.append(...array);


