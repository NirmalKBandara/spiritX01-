document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");

  if (signupForm) {
      signupForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const username = document.getElementById("username").value;
          const password = document.getElementById("password").value;
          const confirmPassword = document.getElementById("confirmPassword").value;

          if (password !== confirmPassword) {
              alert("Passwords do not match!");
              return;
          }

          alert("Signup successful! (Backend will handle storage)");
          // Here, you will send data to the backend using fetch() in Step 6
      });
  }

  if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const username = document.getElementById("loginUsername").value;
          const password = document.getElementById("loginPassword").value;

          alert("Login successful! (Backend will handle authentication)");
      });
  }
});


