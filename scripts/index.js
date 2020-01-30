/*Form Validation*/

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("registerForm");
const errorField = document.getElementById("errorField");
const checkbox = document.getElementById("check");

const switcher = document.getElementById("switcher");
const registerContainer = document.getElementById("registerContainer");
const loginContainer = document.getElementById("loginContainer");

form.addEventListener("submit", e => {
  let messages = [];
  if (
    username.value === "" ||
    username.value === " " ||
    username.value === null ||
    username.value.length <= 3 ||
    usernname.value.length > 16
  ) {
    messages.push(
      "Username must have minimum 4, maximum 16 characters and cannot contain spaces"
    );
  }

  if (
    email.value === "" ||
    email.value === " " ||
    email.value === null ||
    email.value.length <= 3
  ) {
    messages.push("Email is invalid");
  }

  if (
    password.value === "" ||
    password.value === " " ||
    password.value === null ||
    password.value.length <= 5
  ) {
    messages.push("Password must have at least 6 characters");
  }

  if (checkbox.checked === false) {
    messages.push("You must accept our terms");
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorField.innerText = messages.join(", ");
  }
});

/*Sign in / Sign up form switch */
switcher.addEventListener("click", function() {
  registerContainer.classList.add("active");
  loginContainer.classList.remove("active");
});
