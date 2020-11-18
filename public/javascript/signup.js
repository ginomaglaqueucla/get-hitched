async function signupFormHandler(event) {
    event.preventDefault();


    console.log("in sign up");

    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-pw').value.trim();
    const full_name = document.querySelector('#user-fullname').value.trim();

    const engagedSelector = document.querySelector('#couple-choice').checked;
    console.log(email, password, full_name, engagedSelector);
    // guest = true | couple = false
    let userType = true;
    
    if(engagedSelector === "couple") {
        const partner2 = document.querySelector('#signup-partner-two').value.trim();
        userType = false;
    }
  
    if (email && password && full_name) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                full_name,
                userType
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        // check the response status
        if (response.ok) {
            console.log('You have successfully made an account.');
            document.location.replace('/dashboard');
        } else {
            console.log(response.statusText);
        }
    } 
}


document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);

// async function signupFormHandler(event) {
//     event.preventDefault();
  
//     const username = document.querySelector('#username-signup').value.trim();
//     const email = document.querySelector('#email-signup').value.trim();
//     const password = document.querySelector('#password-signup').value.trim();
  
//     if (username && email && password) {
//       const response = await fetch('/api/users', {
//         method: 'post',
//         body: JSON.stringify({
//           username,
//           email,
//           password
//         }),
//         headers: { 'Content-Type': 'application/json' }
//       });
  
//       // check the response status
//       if (response.ok) {
//         console.log('success');
//       } else {
//         alert(response.statusText);
//       }
//     }
// }