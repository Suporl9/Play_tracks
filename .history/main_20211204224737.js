//// @ts-check

const title = document.getElementById("title");
const img = document.getElementById("imgId");
const songs = ["track1", "track2", "track3"];
const audio = document.getElementById("audio1");
const playBtn = document.getElementById("play_icon");
let songIndex = 2;

loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song;
  img.src = `assets/${song}.jpg`;
  // audio
}
