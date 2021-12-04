//@ts-check
let play_icon = document.getElementById("play_icon");
let playState = "play";
//implementing the functionality of the audio player
console.log("playState", playState);
let audio = document.querySelector("audio");
let action_btn = document.querySelector(".action-btn-playpause");
function playPauseFn() {
  if (playState === "play") {
    audio.play();
    // action_btn.classList.add("newClass");
    console.log("playState before pause", playState);
    playState = "pause";
    console.log("playState afterpause", playState);
  } else {
    audio.pause();
    console.log("playState beforeplay", playState);

    playState = "play";
    console.log("playState afterpause", playState);
  }
}
play_icon.addEventListener("click", playPauseFn);
