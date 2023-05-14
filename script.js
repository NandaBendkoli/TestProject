// Function to toggle the visibility of the media container
function toggleMedia() {
  var mediaContainer = document.querySelector('.media-container');
  mediaContainer.classList.toggle('hidden');
}

// Set up the click event listener for the "View Media" button
var viewMediaButton = document.querySelector('#view-media');
viewMediaButton.addEventListener('click', toggleMedia);
