const categories = document.querySelectorAll("#categories > li");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) =>
  console.log(`Category: ${category.firstElementChild.textContent}
Elements: ${category.querySelectorAll("li").length}`)
);
