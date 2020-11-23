async function imageUploadForm(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const response = await fetch('/api/cloudinary/upload', {
        method: 'POST',
        body: formData,
        header: { 'Content-Type': 'application/json' }
    });
    console.log(response);
    if (response.ok) {
        console.log('image uploaded')
        document.location.replace('/partials/upload');
    } else {
        console.log(response.statusText);
    }
    
};

document.querySelector('#uploadImageForm').addEventListener('submit', imageUploadForm);