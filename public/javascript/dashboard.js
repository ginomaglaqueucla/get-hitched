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

document.querySelector('#edit-wedding-btn').addEventListener('click', editWeddingButtonHandler);
document.querySelector('#guestlist-btn').addEventListener('click', guestlistButtonHandler);