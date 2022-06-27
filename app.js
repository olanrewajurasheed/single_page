// Variables
const claimBtn = document.querySelector("button"),
  firstName = document.querySelector("#firstname"),
  lastName = document.querySelector("#lastname"),
  email = document.querySelector("#email"),
  password = document.querySelector("#password"),
  errorText = document.querySelector("text"),
  first = document.querySelector(".first");

// Event Listeners
eventListeners();

function eventListeners() {
  claimBtn.addEventListener("click", claimBtnFnc);
}

// Functions

function claimBtnFnc() {
  //validate first name
  validateFirstName();

  // validate last name input field
  validateLastName();

  // validate email input field
  validateEmail();

  //validate password field
  validatePassword();

}

// Excess DRY here, what do you expect from a noob?

function validateFirstName() {
  if (firstName.value.length !== 0) {
    firstName.style.borderColor = "lightblue";
    firstName.classList.remove("img_icon");
  } else {
    firstName.style.borderColor = "red";
    firstName.classList.add("img_icon");

    /* const firstText = document.createElement("text");
    firstText.classList = "error_textfirst";
    firstText.textContent = "First Name cannot be empty";
    first.appendChild(firstText); */
  }
}

function validateLastName() {
  if (lastName.value.length !== 0) {
    lastName.style.borderColor = "lightblue";
    lastName.classList.remove("img_icon");
  } else {
    lastName.style.borderColor = "red";
    lastName.classList.add("img_icon");
  }
}

function validateEmail() {
  if (email.value.length !== 0) {
    email.style.borderColor = "lightblue";
    email.classList.remove("img_icon");
  } else {
    email.style.borderColor = "red";
    email.classList.add("img_icon");
  }
}

function validatePassword() {
  if (password.value.length !== 0) {
    password.style.borderColor = "lightblue";
    password.classList.remove("img_icon");
  } else {
    password.style.borderColor = "red";
    password.classList.add("img_icon");
  }
}
