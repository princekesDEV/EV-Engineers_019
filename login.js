const loginText = document.querySelector(".title-text .login");
const signupText = document.querySelector(".title-text .signup");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

let login_details = JSON.parse(localStorage.getItem("signup_details")) || [];

// Function to show "Sign-In" and hide "Create Account"
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.display = "block"; // Show "Sign-In"
  signupText.style.display = "none"; // Hide "Create Account"
};

// Function to show "Create Account" and hide "Sign-In"
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.display = "none"; // Hide "Sign-In"
  signupText.style.display = "block"; // Show "Create Account"
};

// If the user clicks on the "Signup now" link, simulate the signup button click
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

// Initially, set "Create Account" to be hidden and "Sign-In" to be visible
signupText.style.display = "none"; // Hide "Create Account"
loginText.style.display = "block"; // Show "Sign-In"
// Done

let signupButton = document.querySelector("#signup-submit");
signupButton.addEventListener("click", () => {
  let signup_name = document.querySelector("#signup-name").value;
  let signup_email = document.querySelector("#signup-email").value;
  let signup_pass = document.querySelector("#signup-password").value;

  let obj = {
    signup_name,
    signup_email,
    signup_pass,
  };

  login_details.push(obj);
  localStorage.setItem("signup_details", JSON.stringify(login_details));
  window.location.href = "./homepage.html";
  alert("Signup Successfull");
});

let loginButton = document.querySelector("#login-submit");
loginButton.addEventListener("click", () => {
  let login_email = document.querySelector("#login-email").value;
  let login_pass = document.querySelector("#login-password").value;

  login_details.forEach((elem) => {
    if (elem.signup_email == login_email && elem.signup_pass == login_pass) {
      window.location.href = "./homepage.html";
      return alert("Login Success \nRedirecting");
    } else {
      return alert("Incorrect Crendtials");
    }
  });
});
