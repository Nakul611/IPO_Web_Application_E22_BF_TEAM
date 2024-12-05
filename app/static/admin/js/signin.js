const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

// Select links and forms
const forgotPassLink = document.querySelector(".forgot-pass");
const loginForm = document.querySelector(".login");
const forgotPasswordForm = document.querySelector(".forgot-password");
const loginLink = document.querySelector(".forgot-password .login-link");

// Show forgot password form
forgotPassLink.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.display = "none";
  forgotPasswordForm.style.display = "block";
});

// Return to login form
loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  forgotPasswordForm.style.display = "none";
  loginForm.style.display = "block";
});

// Add click event listener to each eye icon for toggling password visibility
pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach(password => {
      if (password.type === "password") { // If password is hidden
        password.type = "text"; // Show password
        eyeIcon.classList.replace("bx-hide", "bx-show"); // Change icon to show state
        return;
      }
      password.type = "password"; // Hide password
      eyeIcon.classList.replace("bx-show", "bx-hide"); // Change icon to hide state
    });

  });
});

// Add click event listener to each link to toggle between forms
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); // Prevent default link behavior
    forms.classList.toggle("show-signup");
  });
});