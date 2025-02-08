function getAllMusic() {
fetch('http://localhost:3000/tracks')
    .then(response => response.json())
    .then(response => console.log(response))
}

function search() {
    const paragraph = document.getElementById("p");
    const artistName = document.getElementById("usernameInput").value;
    paragraph.innerHTML = artistName + " Searching!";

}
