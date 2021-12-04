// //@ts-check
let play_icon = document.getElementById("play_icon");
let playState = "play";

function playPauseFn() {
  if (playState === "play") {
    audio.play();
    // playState = "pause";
  } else {
  }
}
play_icon.addEventListener("click", playPauseFn);
