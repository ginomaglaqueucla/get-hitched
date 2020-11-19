async function signupFormHandler(event) {
    event.preventDefault();

    // const username = document.querySelector("#signup-email").value;
    const email = document.querySelector("#signup-email").value;
    const password = document.querySelector("#signup-pw").value;
    const is_couple = document.querySelector("#couple-choice").checked === true;
    (console.log(is_couple));

    if(is_couple) {
        const partner1_name = document.querySelector("#signup-partner-one").value;
        const partner2_name = document.querySelector("#signup-partner-two").value;
        const wedding_date = document.querySelector("#signup-wedding-date").value;
        const wedding_id = document.querySelector("#requested-wedding-id").value;
        fetch('/api/couple', {
            method: 'POST',
            body: JSON.stringify({
                email,
                is_couple,
                partner1_name,
                partner2_name,
                wedding_date,
                wedding_id
            }), 
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
    } else {
        const full_name = document.querySelector("#guest-fullname").value;
        fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({
                email,
                is_couple,
                full_name,
                password
            }), 
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
    }

    document.location.replace('/dashboard');
}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);