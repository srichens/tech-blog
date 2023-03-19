const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
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

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

const signupInsteadButtonEl = document.getElementById("signup-instead");
const loginInsteadButtonEl = document.getElementById("login-instead");
const loginCardEl = document.querySelector('#login-card');
const signupCardEl = document.querySelector('#signup-card');

signupInsteadButtonEl.addEventListener("click", signupInsteadFormHandler);
loginInsteadButtonEl.addEventListener("click", loginInsteadFormHandler);


function signupInsteadFormHandler(event){
  event.preventDefault();

  loginCardEl.classList.add("hidden");
  signupCardEl.classList.remove("hidden");
};

function loginInsteadFormHandler(event){
  event.preventDefault();

  signupCardEl.classList.add("hidden");
  loginCardEl.classList.remove("hidden");
};


document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
