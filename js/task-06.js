const input = document.querySelector("#validation-input")

// function outputValidation() {
    
input.addEventListener("input", (event) => {
event.currentTarget.value.length;
})

input.addEventListener("blur", () => {
  if (input.textContent.length === 6) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid")
  }
})




// console.log(current)
// console.log(input.textContent.length)



