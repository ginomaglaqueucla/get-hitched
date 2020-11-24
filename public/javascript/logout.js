async function logout() {
    const response = await fetch('api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application.json' }
    });
    if (response.ok) {
        console.log('u r now logged out')
        document.location.replace('/');
    } else {
        console.log(response.statusText);
    }
}

document.querySelector('#logout-btn').addEventListener('click', logout);