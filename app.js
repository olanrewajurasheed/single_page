// Variables
const claimBtn = document.querySelector("button"),
  firstName = document.querySelector("#firstname"),
  lastName = document.querySelector("#lastName"),
  email = document.querySelector("#email"),
  password = document.querySelector("#password"),
  errorText = document.querySelector("text");

// Event Listeners
eventListeners();

function eventListeners() {
  claimBtn.addEventListener("click", claimBtnFnc);
}

// Functions

function claimBtnFnc() {
  validateFirstName();
  
  validateLastName();
}

function validateFirstName() {
  if (firstName.value.length == 0) {
    firstName.style.borderColor = "red";
    firstName.classList.add("img_icon");
    document.getElementById("error_textfirst").classList.add("error_textfirst");
  } else {
    firstName.style.borderColor = "lightblue";
  }
}

function validateLastName () {
    if (lastName.value.length == 0) {
        lastName.style.borderColor = "red";
        lastName.classList.add("img_icon");
        document.getElementById("error_textlast").classList.add("error_textlast");
      } else {
        lastName.style.borderColor = "lightblue";
      }
}
