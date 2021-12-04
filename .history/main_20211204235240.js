const title = document.getElementById("title");
const img = document.getElementById("imgId");
const audio = document.getElementById("audio1");
const playBtn = document.getElementById("play_icon");
const boxesContainer = document.getElementById("boxesContainerPlayOrPause");
const nextBtn = document.getElementById("next_btn");
const prevBtn = document.getElementById("prev_btn");

const songs = ["track1", "track2", "track3"]; //names must be exact with the files names

let songIndex = 1; //songs will change later on according to this index from the songs array

loadSong(songs[songIndex]);

//at start of the webpage this function will run which gives us the 2nd track according to the index passed above
function loadSong(song) {
  title.innerText = song;

  img.src = `assets/${song}.jpg`; //images must be in jpg for this code to run

  audio.src = `./${song}.mp3`; //same goes  for audio (ie mp3)
}

//play song functionality
const playSong = () => {
  boxesContainer.classList.add("play");

  playBtn.querySelector("i.fas").classList.remove("fa-play"); //simply changing the fontawesome icon according to play and pause

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
  songIndex++; //keeps on adding until it gets bigger then it loops back from the first index of the song which is 0

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
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
  const isPlaying = boxesContainer.classList.contains("play"); // add play class to boxescontainer so that we can add if else statements later on while coding

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

nextBtn.addEventListener("click", nextSong);

prevBtn.addEventListener("click", prevSong);
