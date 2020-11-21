async function signupFormHandler(event) {
    event.preventDefault();


    console.log("in sign up");

    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-pw').value.trim();
    const full_name = document.querySelector('#user-fullname').value.trim();
    
    // placeholder for partner2 name, 
    //will get overwritten with real name or will not be used at all
    let partner2 = "placeholder";

    const engaged = document.querySelector('#couple-choice').checked;
    console.log(email, password, full_name, engaged, partner2);
    
    if(engaged) {
        partner2 = document.querySelector('#signup-partner-two').value.trim();
    }
    console.log(partner2);
    if (email && password && full_name && partner2) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                full_name,
                engaged,
                partner2
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        // check the response status
        if (response.ok) {
            console.log('You have successfully made an account.');
            // document.location.replace('/dashboard');
            document.location.replace('/edit');
        } else {
            console.log(response.statusText);
        }
    } 
}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
