async function editWeddingButtonHandler(event){
    event.preventDefault();

    console.log("redirecting to edit wedding");
    document.location.replace('/dashboard/edit'); 
}


document.querySelector('#edit-wedding-btn').addEventListener('click', editWeddingButtonHandler);