const wedding_dateForm = document.querySelector('#wedding-date');
const wedding_hashtagForm = document.querySelector('#wedding-hashtag');
const wedding_locationForm = document.querySelector('#wedding-location');
const wedding_detailsForm = document.querySelector('#wedding-details');
const wedding_id = document.querySelector('#wedding-id').value.trim();

// perfrom error handling here for duplicate hashtags

async function editWeddingFormHandler(event) {
    event.preventDefault();

    let methodString;
    let queryString;
    console.log("in edit-wedding");


    const wedding_date = wedding_dateForm.value.trim();
    const wedding_hashtag = wedding_hashtagForm.value.trim();
    const wedding_location = wedding_locationForm.value.trim();
    const wedding_details = wedding_detailsForm.value.trim();

    console.log(wedding_date, wedding_hashtag, wedding_location, wedding_details);
  
  if (wedding_date && wedding_hashtag && wedding_location && wedding_details) {
      console.log("teet rtet");
      if(wedding_id === "0"){
          console.log("is nnull");
          methodString = 'POST';
          queryString = '/api/wedding';
      }
      else{
          console.log("has an id",wedding_id);
          methodString = 'PUT';
          queryString = '/api/wedding/'+wedding_id;

      }
      const response = await fetch(queryString, {
          method: methodString,
          body: JSON.stringify({
              wedding_date,
              wedding_location,
              wedding_hashtag,
              wedding_details
          }),
          headers: { 'Content-Type': 'application/json' }
      });
      // check the response status
      if (response.ok) {
          console.log('You have successfully entered your wedding information.');
          document.location.replace('/dashboard');
      } else {
          console.log(response.statusText);
      }
  } 
}

// async function loadEditor() {
//     if(req.session.)
//     const response = await fetch('/api/')
// }

document.querySelector('#edit-form').addEventListener('submit', editWeddingFormHandler);
