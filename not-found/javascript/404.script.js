const tracks = [

  { name: "Ed Sheeran - Shape of You", file: "not-found/assets/audios/Ed Sheeran - Shape of You.mp3" },
  { name: "Bebe Rexha - I Got You", file: "not-found/assets/audios/Bebe Rexha - I Got You.mp3" },
  { name: "Charlie Puth - We Don't Talk Anymore (feat. Selena Gomez)", file: "not-found/assets/audios/Charlie Puth - We Don't Talk Anymore (feat. Selena Gomez).mp3" },
  { name: "Sam Feldt & Sigma ft. Gia Koka - 2 Hearts", file: "not-found/assets/audios/Sam Feldt & Sigma ft. Gia Koka - 2 Hearts.mp3" },
  { name: "Sean Paul - No Lie (ft. Dua Lipa)", file: "not-found/assets/audios/Sean Paul - No Lie (ft. Dua Lipa).mp3" },
  { name: "Bebe Rexha - (Not) The One", file: "not-found/assets/audios/Bebe Rexha - (Not) The One.mp3" },
  { name: "Major Lazer & DJ Snake - Lean On (feat. MØ).mp3", file: "not-found/assets/audios/Major Lazer & DJ Snake - Lean On (feat. MØ).mp3" },
  { name: "Tyron Hapi, Liam Ferrari - I Like The Way", file: "not-found/assets/audios/Tyron Hapi, Liam Ferrari - I Like The Way.mp3" },

];

// ------> SELECTORS <------
const audio = document.getElementById("player");
const playBtn = document.querySelector(".play");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const trackNameEl = document.getElementById("trackName");

let index = Math.round(Math.random()*7);
let isPlaying = false;

// ------> LOAD TRACK <------
function loadTrack(i) {
  audio.src = tracks[i].file;
  trackNameEl.textContent = tracks[i].name;

  if (isPlaying) {
    audio.muted = false;
    audio.play();
  }
}

loadTrack(index);

// ------> PLAY / PAUSE <------
playBtn.onclick = () => {
  if (!isPlaying) {
    audio.muted = false;
    audio.play();
    playBtn.textContent = "pause";
  } else {
    audio.pause();
    playBtn.textContent = "play_arrow";
  }
  isPlaying = !isPlaying;
};

// ------> NEXT TRACK <------
nextBtn.onclick = () => {
  index = (index + 1) % tracks.length;
  loadTrack(index);
};

// ------> PREV TRACK <------
prevBtn.onclick = () => {
  index = (index - 1 + tracks.length) % tracks.length;
  loadTrack(index);
};

// ------> AUTO PLAY NEXT WHEN SONG ENDS <------
audio.addEventListener("ended", () => {
  index = (index + 1) % tracks.length;
  loadTrack(index);
  audio.play();
  playBtn.textContent = "pause";
  isPlaying = true;
});


// BACKGROUND CHANGER 

// List of background images
const backgrounds = [
  "not-found/assets/images/bg-01.jpg",
  "not-found/assets/images/bg-02.jpg",
  "not-found/assets/images/bg-03.jpg"
];

// Initial index
let bgIndex = Math.round(Math.random()*2);

// Select buttons
const prevBg = document.querySelector(".prev-bg");
const nextBg = document.querySelector(".next-bg");

// Function to update the background
function updateBackground() {
  document.body.style.background = `url('${backgrounds[bgIndex]}') center/cover fixed no-repeat`;
}

// Load first background on page load
updateBackground();

// Next BG
nextBg.addEventListener("click", (e) => {
  e.stopPropagation();  // Prevent closing hover
  bgIndex = (bgIndex + 1) % backgrounds.length;
  updateBackground();
});

// Previous BG
prevBg.addEventListener("click", (e) => {
  e.stopPropagation();
  bgIndex = (bgIndex - 1 + backgrounds.length) % backgrounds.length;
  updateBackground();
});