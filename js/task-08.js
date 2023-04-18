
const form = document.querySelector(".login-form");
// const inputEmail = document.querySelector("input[name='email']");
// const inputPassword = document.querySelector("input[name='password']")
// const button = document.button;

form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
  
  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }
  
 console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
  
}