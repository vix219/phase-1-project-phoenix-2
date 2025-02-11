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


function getAllMusic() {
    fetch('./db.json')
    .then((response) => response.json()) 
    .then(data => {
      console.log(data);
      /*
      tracks.forEach(tracks => {
        let img = document.querySelector('img');
        img.src = tracks.pl.img;
        // img.id = track.name;
        img.genre = tracks.pl.name;
      });
      */
    });
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
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("demo");
        let captionText = document.getElementById("caption");
              if (n > slides.length) {slideIndex = 1}
              if (n < 1) {slideIndex = slides.length}
              for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
              }
              for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
              }
              slides[slideIndex-1].style.display = "block";
              dots[slideIndex-1].className += " active";
              captionText.innerHTML = dots[slideIndex-1].alt;
}


function playMusic(tracks) {
  const videoEle = document.querySelector('video');
  const imgEle = document.querySelector('img');
  
  tracks.forEach(track => {
    if (videoEle && imgEle) {
      videoEle.src = track.trackUrl; 
      imgEle.src = track.img;
      videoEle.addEventListener('click', () => {
        videoEle.play();
        videoEle.defaultMuted = true;
        console.log(videoEle.outerHTML); 
      });
    }
  });
}

function getMusicByArtist(artistName) {
  console.log('Searching for artist: ', artistName);
  fetch('./db.json')
    .then(response => response.json())
    .then(data => {
      // Filter tracks by the artist
      const artistTracks = data.filter(track => track.artist.toLowerCase() === artistName.toLowerCase());

      if (artistTracks.length > 0) {
        playMusic(artistTracks); // Play the music related to the artist
      } else {
        console.log('No tracks found for artist: ', artistName);
      }
    })
    .catch(error => console.error('Error fetching tracks:', error));
}

function searchArtist() {
  console.log('search initiated');
  const paragraph = document.getElementById("message-artist");
  const artistNameInput = document.getElementById("search-artist-button");
  const artistName = document.getElementById("searchInput").value;

  paragraph.innerHTML = "Searching for " + artistName;
  
  // Trigger the search
  getMusicByArtist(artistName);
}

function main() {
  const callButton = document.getElementById('search-artist-button');
  callButton.addEventListener('click', () => searchArtist());
  showSlides();
  playMusic();
  
}

main();
