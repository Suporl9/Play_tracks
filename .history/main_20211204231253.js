//// @ts-check

const title = document.getElementById("title");
const img = document.getElementById("imgId");
const songs = ["track1", "track2", "track3"];
const audio = document.getElementById("audio1");
const playBtn = document.getElementById("play_icon");
const boxesContainer = document.getElementById("boxesContainerPlayOrPause");
const nextBtn = document.getElementById("next_btn");
const prevBtn = document.getElementById("prev_btn");
let songIndex = 1;

loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song;
  img.src = `assets/${song}.jpg`;
  audio.src = `./${song}.mp3`;
}

//play song functionality
const playSong = () => {
  boxesContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
};
//pause song functionality
const pauseSong = () => {
  boxesContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  audio.pause();
};

//next song functionality
const nextSong = () => {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
  // console.log(songIndex);
};
//previous song functionality(is similar to the nextsong functionality)
const prevSong = () => {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
};

playBtn.addEventListener("click", () => {
  const isPlaying = boxesContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

nextBtn.addEventListener("click", nextSong);
