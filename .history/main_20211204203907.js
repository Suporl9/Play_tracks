//@ts-check
let play_icon = document.getElementById("play_icon");
let playState = "play";

function playPauseFn() {
  if (playState === "play") {
    console.log("play the playstate");
  }
}
play_icon.addEventListener("click", playPauseFn);
