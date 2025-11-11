// BACKGROUND CHANGER 

// List of background images
const backgrounds = [
  "not-found/assets/images/bg-01.jpg",
  "not-found/assets/images/bg-02.jpg",
  "not-found/assets/images/bg-03.jpg"
];

// Initial index
let bgIndex = Math.round(Math.random() * 2);

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