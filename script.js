const email = document.querySelector("#email");

const emailError = document.querySelector("#email-error");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    emailError.textContent =
      "Please enter a valid email address such as yourname@email.com";
  } else {
    emailError.textContent = "";
  }
});
