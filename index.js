const tracks = document.querySelector();


function getAllMusic() {
    fetch('./db.json')
    .then((response) => response.json()) 
    .then(data => {
      console.log(data);
      tracks.forEach(tracks => {
        let img = document.querySelector('img');
        img.src = tracks.pl.img;
        // img.id = track.name;
        img.genre = tracks.pl.name;
      });
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
getAllMusic();

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

