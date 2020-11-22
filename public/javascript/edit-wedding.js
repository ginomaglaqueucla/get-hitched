async function editWeddingFormHandler(event) {
  event.preventDefault();


  console.log("in edit-wedding");

  const wedding_date = document.querySelector('#wedding-date').value.trim();
  const wedding_hashtag = document.querySelector('#wedding-hashtag').value.trim();
  const wedding_location = document.querySelector('#wedding-location').value.trim();
  const wedding_details = document.querySelector('#wedding-details').value.trim();

  console.log(wedding_date, wedding_hashtag, wedding_location, wedding_details);
  
  if (wedding_date && wedding_hashtag && wedding_location && wedding_details) {
      const response = await fetch('/api/wedding', {
          method: 'POST',
          body: JSON.stringify({
              wedding_date,
              wedding_hashtag,
              wedding_location,
              wedding_details
          }),
          headers: { 'Content-Type': 'application/json' }
      })
      // check the response status
      if (response.ok) {
          console.log('You have successfully entered your wedding information.');
          document.location.replace('/dashboard');
      } else {
          console.log(response.statusText);
      }
  } 
}

document.querySelector('#edit-form').addEventListener('submit', editWeddingFormHandler);
