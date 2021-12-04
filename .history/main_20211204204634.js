//@ts-check
let play_icon = document.getElementById("play_icon");
let playState = "play";
//implementing the functionality of the audio player

let audio = document.querySelector("audio");

function playPauseFn() {
  if (playState === "play") {
    audio.play();
    playState = "pause";
  } else {
    audio.pause();
    playState = "play";
  }
}
play_icon.addEventListener("click", playPauseFn);
