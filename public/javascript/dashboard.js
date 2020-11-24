const invite_hashtagForm =document.querySelector('#invite-hashtag');

async function editWeddingButtonHandler(event){
    event.preventDefault();

    console.log("redirecting to edit wedding");
    document.location.replace('/dashboard/edit'); 
}

async function guestlistButtonHandler(event){
    event.preventDefault();

    console.log("redirecting to guest list");
    document.location.replace('/dashboard/guestlist'); 
}

async function addWeddingButtonHandler(event){
    event.preventDefault();

    const invite_hashtag = invite_hashtagForm.value.trim();
    const queryString = '/api/wedding/hashtag/'+ invite_hashtag;


    if(invite_hashtag){
        const response = await fetch(queryString, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        // check the response status
        if (response.ok) {
            console.log('You got redirected to invite page.');
            document.location.replace('/dashboard/invite');
        } else {
            console.log("YEAH COULDNT FIND");
            console.log(response.statusText);
        }
    }
}



document.querySelector('#add-wedding-btn').addEventListener('click', addWeddingButtonHandler);
document.querySelector('#edit-wedding-btn').addEventListener('click', editWeddingButtonHandler);
document.querySelector('#guestlist-btn').addEventListener('click', guestlistButtonHandler);