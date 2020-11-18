async function signupFormHandler(event) {
    event.preventDefault();
    document.location.replace('/dashboard');
}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);