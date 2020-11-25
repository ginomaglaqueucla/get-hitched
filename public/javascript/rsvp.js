//this form works theres just no route to the db

async function inviteFormHandler(event) {
    event.preventDefault();
    console.log('rsvped');
    console.dir(event);
    var form = event.target;
    const rsvp = form['user-type'].value;
    const foodChoice = form['food-choice'].value;
    const plusOne = form['plusone-choice'].value;
    // console.log({
    //     rsvp,
    //     foodChoice,
    //     plusOne
    // });
    const response = await fetch('api/guestlist', {
        method: 'POST',
        body: JSON.stringify({
            rsvp,
            foodChoice,
            plusOne
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        console.log(response.statusText);
    }
}

document.querySelector('#invite-form').addEventListener('submit', inviteFormHandler);