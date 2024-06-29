const formCon = document.getElementById("form-con");

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
// Error message elements
const nameErr = document.getElementById("nameError");
const emailErr = document.getElementById("emailError");
const passowrdErr = document.getElementById("passwordError");

// form validator function

const formValidator = (e) => {
  e.preventDefault();
  let isValid = true;
  if (name.value.length < 3) {
    nameErr.style.visibility = "visible";
    isValid = false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    emailErr.style.visibility = "visible";
    isValid = false;
  }

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(password.value)) {
    passowrdErr.style.visibility = "visible";
    isValid = false;
  }
  if (isValid) {
    alert("Form submitted successfully!");
  } else {
    alert("Opps: Something wrong.");
  }
};

// form submit
formCon.addEventListener("submit", formValidator);

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const pass = "Abc123456";
console.log(passwordRegex.test(pass));
