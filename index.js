
function search() {
    const paragraph = document.getElementById("p");
    const artistName = document.getElementById("usernameInput").value;
    paragraph.innerHTML = artistName + " Searching!";

}