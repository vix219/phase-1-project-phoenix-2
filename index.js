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

function getMusicByArtits(artistName) {
  console.log('artistName: ', artistName);
  fetch('./db.json')
  .then((response) => response.json()) 
  .then(data => {
    console.log(data);
    // data.tracks.filter((tracks) => tracks.uNm === artistName)
    // .map((items) => {
    //   console.log(items);
    // })
    data.tracks.forEach((tracks) => {
      if (tracks.uNm === artistName) {
        console.log(tracks);
        /*
        let img = document.querySelector('img');
        img.src = tracks.pl.img;
        // img.id = track.name;
        img.genre = tracks.pl.name;
        */
      }
    });
  });
}

function searchArtist() {
  console.log('search');
  const paragraph = document.getElementById("message-artist");
  const artistNameInput = document.getElementById("search-artist-button");
  console.log(artistNameInput);
  const artistName = document.getElementById("searchInput").value;
  paragraph.innerHTML = "Searching " + "for " + artistName;
  artistNameInput.addEventListener('click', () => getMusicByArtits(artistName))
  // let artistSearch = {
  //     name: document.getElementById('').value,  
  //     genre: document.getElementById('').value,  
  //     image: document.getElementById('').value,  
  // }
}

// function artist() {
// }

// function genre() {
// }

function main() {
  const callButton = document.getElementById('search-artist-button');
  callButton.addEventListener('click', () => searchArtist());
}

main();
getAllMusic();
getMusicByArtits();
// searchArtist();
