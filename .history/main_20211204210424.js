//// @ts-check
let play_icon = document.getElementById("play_icon");
let playState = "play";
//implementing the functionality of the audio player
console.log("playState", playState);
let audio1 = document.getElementById("audio1");
let audio2 = document.getElementById("audio2");
// console.log(auido1.play());
let action_btn = document.querySelector(".action-btn-playpause");
function playPauseFn() {
  if (playState === "play") {
    audio2.play();
    // action_btn.classList.add("newClass");
    playState = "pause";
  } else {
    audio2.pause();

    playState = "play";
  }
}
play_icon.addEventListener("click", playPauseFn);
