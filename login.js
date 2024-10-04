const loginText = document.querySelector(".title-text .login");
const signupText = document.querySelector(".title-text .signup");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

// Function to show "Sign-In" and hide "Create Account"
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.display = "block";  // Show "Sign-In"
  signupText.style.display = "none";  // Hide "Create Account"
};

// Function to show "Create Account" and hide "Sign-In"
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.display = "none";   // Hide "Sign-In"
  signupText.style.display = "block"; // Show "Create Account"
};

// If the user clicks on the "Signup now" link, simulate the signup button click
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

// Initially, set "Create Account" to be hidden and "Sign-In" to be visible
signupText.style.display = "none";  // Hide "Create Account"
loginText.style.display = "block";  // Show "Sign-In"
// Done
