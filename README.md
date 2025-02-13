# phase-1-project-phoenix-2

## Music Box - Video Gallery

A website displaying music videos with Artist name, song titles. It allows clients to like the videos, and contribute a video of their choice to be displayed in the video gallery.

---
### Technologies 

* JavaScript version: v22.11.0
* HTML
* CSS
* JSON

---
### General Info
This website is a video music player and music video submission website made for simple client interactions. 
---
### Launch

* node.js
```
$ npm install
$ npm start
$ json-server --watch db.json

```
---
### Usage

This project provides several Javascript codes that can help with YouTube video embeding and display. As well as fetching data from a server. 

```
    const galleryContainer = document.getElementById('gallery-container');
    const musicForm = document.getElementById('music-form');

    // Function to get YouTube video id's from URL
    function getYouTubeVideoId(url) {
      if (url.includes('youtu.be')) {
        return url.split('/').pop();
      } else if (url.includes('youtube.com')) {
        const urlParams = new URLSearchParams(new URL(url).search);
        return urlParams.get('v');
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
      iframe.allowFullscreen = true;
      return iframe;
    }

    // Function to create the description for each video
    function createDescription(artist, song, likes) {
      const descDiv = document.createElement('div');
      descDiv.classList.add('desc');
      descDiv.innerHTML = `${artist} <br> ${song} <br> ${likes} 👍🏼`;
      return descDiv;
    }

    // Function to display a single music video based on user input
    function displaySingleMusic(videoData) {
      const videoId = getYouTubeVideoId(videoData.link);
      if (videoId) {
        const iframe = createIframe(videoId);
        const descDiv = createDescription(videoData.artist, videoData.song, videoData.likes);

        const galleryDiv = document.createElement('div');
        galleryDiv.classList.add('gallery');
        galleryDiv.appendChild(iframe);
        galleryDiv.appendChild(descDiv);

        galleryContainer.appendChild(galleryDiv);
      } else {
        console.error('Invalid YouTube URL:', videoData.link);
      }
    }

    // Function to handle form submission
    function handleFormSubmit(event) {
      event.preventDefault();

      const artist = document.getElementById('artist').value;
      const song = document.getElementById('song').value;
      const likes = document.getElementById('likes').value;
      const link = document.getElementById('link').value;

      const newTrack = { artist, song, likes, link };
      
      // Display the entered video
      displaySingleMusic(newTrack);

      // Optionally, you can store this data to a server or localStorage
      // For now, we'll just clear the form
      musicForm.reset();
    }

    // Attach the form submission handler
    musicForm.addEventListener('submit', handleFormSubmit);

    // Optionally: Automatically load data from a server (like the original fetch function)
    function displayMusic() {
      // You can fetch and display data from a database or API here
      // For now, we will skip the fetch function in this example
    }

    // Invoke the function to load initial data (if necessary)
    window.onload = displayMusic;


```

---
### Project Status

Project is: in progress. We are working on our "like" button feature.

---


