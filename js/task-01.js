const categories = document.querySelectorAll("#categories > li");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) =>
  console.log(`Category: ${category.querySelector("h2").textContent}
Elements: ${category.querySelectorAll("li").length}`)
);
