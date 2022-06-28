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

// Excess DRY here, but what do you expect from a noob?

function validateFirstName() {
  if (firstName.value.length !== 0) {
    firstName.style.borderColor = "hsl(154, 59%, 51%)";
    firstName.classList.remove("img_icon");
    document.querySelector(".first text").style.display="none";
  } else {
    firstName.style.borderColor = "hsl(0, 100%, 74%)";
    firstName.classList.add("img_icon");
    document.querySelector(".first text").style.display="block";
    document.querySelector(".first input").placeholder="";
  }
}

function validateLastName() {
  if (lastName.value.length !== 0) {
    lastName.style.borderColor = "hsl(154, 59%, 51%)";
    lastName.classList.remove("img_icon");
    document.querySelector(".last text").style.display="none";
  } else {
    lastName.style.borderColor = "hsl(0, 100%, 74%)";
    lastName.classList.add("img_icon");
    document.querySelector(".last text").style.display="block";
    document.querySelector(".last input").placeholder="";
  }
}

function validateEmail() {
  if (email.value.length !== 0) {
    email.style.borderColor = "hsl(154, 59%, 51%)";
    email.classList.remove("img_icon");
    document.querySelector(".email text").style.display="none";
  } else {
    email.style.borderColor = "hsl(0, 100%, 74%)";
    email.classList.add("img_icon");
    document.querySelector(".email text").style.display="block";
    document.querySelector(".email input").placeholder="email@example/com";
    document.querySelector(".email input").placeholder.color="red";
  }
}

function validatePassword() {
  if (password.value.length !== 0) {
    password.style.borderColor = "hsl(154, 59%, 51%)";
    password.classList.remove("img_icon");
    document.querySelector(".pass text").style.display="none";
  } else {
    password.style.borderColor = "hsl(0, 100%, 74%)";
    password.classList.add("img_icon");
    document.querySelector(".pass text").style.display="block";
    document.querySelector(".pass input").placeholder="";
  }
}
