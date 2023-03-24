const keys = document.querySelectorAll(".key");
const blackKeys = document.querySelectorAll(".key.black");
const whiteKeys = document.querySelectorAll(".key.white");
const WHITE_KEYS = ["Q", "S", "D", "F", "G", "H", "J"];
const BLACK_KEYS = ["Z", "E", "R", "T", "Y"];

keys.forEach((key) => key.addEventListener("click", () => playNote(key)));

const playNote = function (key) {
  const note = document.getElementById(key.dataset.note);
  note.currentTime = 0;
  key.classList.add("active");
  note.play();
  note.addEventListener("ended", () => {
    key.classList.remove("active");
  });
};

document.addEventListener("keydown", (e) => {
  if (e.repeat) return;

  const key = e.key.toUpperCase();
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex != -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex != -1) playNote(blackKeys[blackKeyIndex]);
});
