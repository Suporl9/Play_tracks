//// @ts-check

const title = document.getElementById("title");
const img = document.getElementById("imgId");
const songs = ["track1", "track2", "track3"];
let songIndex = 2;

loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song;
  img.src = `assets/${song}.jpg`;
}
