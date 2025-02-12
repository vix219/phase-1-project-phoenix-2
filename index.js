// const tracks = document.querySelector();
// const image = document.querySelector();
// const genre = document.querySelector();
// const song = document.querySelector();
// const likes = document.querySelector();

// Create a function that fetches all data from db.json file
// Add button in HTML file that searches through artist, or genre
// Create a function that displays and plays music of searched item
//       - In that function display the information for the music: Artist name, Song name, Genre, Link to video.
// Create an HTML button for "likes 👍🏼" and one for "dislikes 👎🏼"
// Create a function that has a button for "likes", and eventListener for the "likes button".

// Create a form with id of "Contribute to Music Box" in HTML that has
//       - key:values of Artist name, Song name, Genre, Link to song. It has a form button of "   ".
// Create a function that has an evenListener for the "Contribute to Music Box"
// Remember to e.preventDefault(), e.target.reset() 
// Invoke functions and append!
// Make a fetch() with method oof 'POST' to add the new music with key:values from form to the db.json objects


// function getAllMusic() {
//     fetch('./db.json')
//     .then((response) => response.json()) 
//     .then(data => {
//       console.log(data);
      /*
      tracks.forEach(tracks => {
        let img = document.querySelector('img');
        img.src = tracks.pl.img;
        // img.id = track.name;
        img.genre = tracks.pl.name;
      });
      */
    // });
    /*
    fetch('./db.json')
    .then(response => console.log(response.json()))
    .then(response => console.log(response))
    response.forEach((tracks) => {
        let img = document.querySelector('img');
        img.src = tracks.img;
        // img.id = tracks.name;
        img.genre = tracks.pl.name;
    });
    */
// }

// function playMusic(tracks) {
//   const videoEle = document.querySelector('video');
//   const imgEle = document.querySelector('img');
  
//   tracks.forEach(track => {
//     if (videoEle && imgEle) {
//       videoEle.src = track.trackUrl; 
//       imgEle.src = track.img;
//       videoEle.addEventListener('click', () => {
//         videoEle.play();
//         videoEle.defaultMuted = true;
//         console.log(videoEle.outerHTML); 
//       });
//     }
//   });
// }

// function getMusicByArtist(artistName) {
//   console.log('Searching for artist: ', artistName);
//   fetch('./db.json')
//     .then(response => response.json())
//     .then(data => {
//       // Filter tracks by the artist
//       const artistTracks = data.filter(track => track.artist.toLowerCase() === artistName.toLowerCase());

//       if (artistTracks.length > 0) {
//         playMusic(artistTracks); // Play the music related to the artist
//       } else {
//         console.log('No tracks found for artist: ', artistName);
//       }
//     })
//     .catch(error => console.error('Error fetching tracks:', error));
// }

// function searchArtist() {
//   console.log('search initiated');
//   const paragraph = document.getElementById("message-artist");
//   const artistNameInput = document.getElementById("search-artist-button");
//   const artistName = document.getElementById("searchInput").value;

//   paragraph.innerHTML = "Searching for " + artistName;
  
//   // Trigger the search
//   getMusicByArtist(artistName);
// }

function main() {
  // const callButton = document.getElementById('search-artist-button');
  // callButton.addEventListener('click', () => searchArtist());
  // playMusic();
  
}

main();

const galleryContainer = document.getElementById('gallery-container');

// Function to get youTube video id's from URL
function getYouTubeVideoId(url) {
  if (url.includes('youtu.be')) {
    return url.split('/').pop();
  }
  return null;
}

// Function to create the iframe for each video in the browser display
function createIframe(videoId) {
  const iframe = document.createElement('iframe');
  iframe.classList.add('video-src');
  iframe.width = 300;
  iframe.height = 250;
  iframe.controls = true;
  iframe.src = `https://www.youtube.com/embed/${videoId}`;

  iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;
  return iframe;
}

// Function to create the description for each video
function createDescription(artist, song, likes) {
  const descDiv = document.createElement('div');
  descDiv.classList.add('desc');
  descDiv.innerHTML = `${artist} <br> ${song} <br>  ${likes} 👍🏼`;
  return descDiv;
}

//Function to display the music from the db.json file videos
function displayMusic() {
  fetch('./db.json')
    .then(response => response.json())
    .then(data => {
      const tracks = data.tracks;
      galleryContainer.innerHTML = ''; 
      tracks.forEach(track => {
        const videoId = getYouTubeVideoId(track.link);
        if (videoId) {
          const iframe = createIframe(videoId);
          const descDiv = createDescription(track.artist, track.song, track.likes);

        
          const galleryDiv = document.createElement('div');
          galleryDiv.classList.add('gallery');
          galleryDiv.appendChild(iframe);
          galleryDiv.appendChild(descDiv);

          galleryContainer.appendChild(galleryDiv);
        } else {
          console.error('Invalid YouTube URL:', track.link);
        }
      });
    })
    .catch(error => console.error(error));
}

//Invoke the function to load data
window.onload = displayMusic;
