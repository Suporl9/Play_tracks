//@ts-check
let play_icon = document.getElementById("play_icon");

function playPause(e) {
  console.log("played/paused");
}
play_icon.addEventListener("click", playPause);
