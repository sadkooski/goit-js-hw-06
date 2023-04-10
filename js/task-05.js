const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");



input.addEventListener("input", (event) => { 
    if (event.currentTarget.value === "") {
        return output.textContent = "Anonymous"
    } else
    output.textContent = event.currentTarget.value;
});