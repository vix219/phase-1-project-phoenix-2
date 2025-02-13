

let galleryContainer = document.getElementById('gallery-container');

// Function to get youTube video id's from URL
function getYouTubeVideoId(url) {
  if (url.includes('youtu.be')) {
    return url.split('/').pop();
  }
  return null;
}

// Function to create the iframe for each video in the browser display
function createIframe(videoId) {
  let iframe = document.createElement('iframe');
  iframe.classList.add('video-src');
  iframe.width = 300;
  iframe.height = 250;
  iframe.controls = true;
  iframe.src = `https://www.youtube.com/embed/${videoId}`;

  
  iframe.allowFullscreen = true;
  return iframe;
}

// Function to create the description for each video
function createDescription(artist, song, likes) {
  let descDiv = document.createElement('div');
  descDiv.classList.add('desc');
  descDiv.innerHTML = `${artist} <br> ${song} <br>  ${likes} 👍🏼`;
  return descDiv;
}

//Function to display the music from the db.json file videos
function displayMusic() {
  fetch('http://localhost:3000/tracks')
  .then(response => response.json())
  .then(data => {
    console.log(data);  
    let tracks = data;
    galleryContainer.innerHTML = ''; 
    tracks.forEach(track => {
      let videoId = getYouTubeVideoId(track.link);
      if (videoId) {
        let iframe = createIframe(videoId);
        let descDiv = createDescription(track.artist, track.song, track.likes);

        let galleryDiv = document.createElement('div');
        galleryDiv.classList.add('gallery');
        galleryDiv.appendChild(iframe);
        galleryDiv.appendChild(descDiv);

        galleryContainer.appendChild(galleryDiv);
      } else {
        console.error('Invalid YouTube URL:', track.link);
      }
    });
  })
  .catch(error => console.error('Error fetching data:', error));
}
//Invoke the function to load data
window.onload = displayMusic();

function submitForm() {
  let form = document.getElementById('form');
  form.addEventListener('submit', function(event){ 
    event.preventDefault();
    
// Create newVid variable selecting the HTML elements to use
    let newVid = {
      artist: document.getElementById('Aname').value, 
      song: document.getElementById('Stitle').value,
      link: document.getElementById('Vlink').value,
      likes: 0 
    };
    
    console.log(newVid);
    
// Make a POST request to add the newVid data to the JSON file, and gallery
    fetch('http://localhost:3000/tracks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newVid),
    })
    .then(response => response.json())
    .then(createdVid => {
      console.log(createdVid);
      
      
      let videoId = getYouTubeVideoId(createdVid.link);
      if (videoId) {
        let iframe = createIframe(videoId);
        let descDiv = createDescription(createdVid.artist, createdVid.song, createdVid.likes);

        let galleryDiv = document.createElement('div');
        galleryDiv.classList.add('gallery');
        galleryDiv.appendChild(iframe);
        galleryDiv.appendChild(descDiv);

        galleryContainer.appendChild(galleryDiv);
      } else {
        console.error('Invalid YouTube URL:', createdVid.link);
      }

      
      form.reset();
    })
    .catch(error => console.error('Error submitting data:', error));
  });
}
submitForm();

document.querySelector('input[type="checkbox"]').addEventListener('change', function(event) {
  document.body.classList.toggle('darkMode');
});

function createLikes(artist, song) {
  let likeCount = 0;
  let dislikeCount = 0;

  let descDiv = document.createElement('div');
  descDiv.classList.add('desc');

  descDiv.innerHTML = `${artist} <br> ${song} <br> Likes: <input id="likeStatus">${likeCount}
  </input> <br> Dislikes: <input id="dislikeStatus">${dislikeCount}</input>`;

  let likeButton = document.createElement('button');
  likeButton.textContent = '👍';
  likeButton.onclick = function() {
      likeCount++;
      descDiv.querySelector('likeStatus').textContent = `${likeCount}`; // Update like count
  };

  let dislikeButton = document.createElement('button');
  dislikeButton.textContent = '👎';
  dislikeButton.onclick = function() {
      dislikeCount++;
      descDiv.querySelector('dislikeStatus').textContent = `${dislikeCount} `; // Update dislike count
  };

  let buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');
  buttonContainer.appendChild(likeButton);
  buttonContainer.appendChild(dislikeButton);

  descDiv.appendChild(buttonContainer);

  return descDiv;
}
createLikes();
