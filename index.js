
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
fetch('http://localhost:3000/tracks')
    .then(response => response.json())
    .then(response => console.log(response))
    tracks.forEach(tracks => {
        let img = document.querySelector('img');
        img.src = tracks.img;
        img.id = tracks.name;
        img.genre = tracks.pl.name;
    })
}

function search() {
    const paragraph = document.getElementById("p");
    const artistName = document.getElementById("usernameInput").value;
    paragraph.innerHTML = artistName + " Searching!";
    artistName.addEventListener('click', () => search(tracks))
    let artistSearch = {
        name: document.getElementById('').value,  
        genre: document.getElementById('').value,  
        image: document.getElementById('').value,  
}

}

