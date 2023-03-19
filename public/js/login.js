const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};


// document.querySelector('#signup').addEventListener('click', signup);
// const signupInsteadButtonEl = document.getElementById("signup");
// const loginInsteadButtonEl = document.getElementById("login-instead");
// const loginCardEl = document.querySelector('#login-card');
// const signupCardEl = document.querySelector('#signup-card');

// signupInsteadButtonEl.addEventListener("click", signupInsteadFormHandler);
// loginInsteadButtonEl.addEventListener("click", loginInsteadFormHandler);


// function signupInsteadFormHandler(event){
//   event.preventDefault();

//   loginCardEl.classList.add("hidden");
//   signupCardEl.classList.remove("hidden");
// };

// function loginInsteadFormHandler(event){
//   event.preventDefault();

//   signupCardEl.classList.add("hidden");
//   loginCardEl.classList.remove("hidden");
// };


document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
