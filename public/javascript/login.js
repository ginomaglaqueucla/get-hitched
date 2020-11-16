async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-pw').value.trim();
console.log(email, password);
    if (email && password) {
        console.log('are we getting along?');
        const response = await fetch('api/user/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('u r logged in')
            document.location.replace('/'); //will reroute to the homepage
        } else {
            console.log(response.statusText);
        }
    }
};

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);