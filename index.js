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

