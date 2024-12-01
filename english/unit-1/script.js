// Audio player functionality
let currentAudio = null;

function playAudio(messageNumber) {
  // Stop currently playing audio if any
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Create new audio instance with your local audio path
  const audio = new Audio(
    `unit-1/audio/Hello_What_Is_Your_Name${messageNumber}.mp3`
  );
  currentAudio = audio;

  // Play audio
  audio.play().catch((error) => {
    console.log("Audio playback failed:", error);
  });

  // Add visual feedback
  const button = document.querySelector(
    `[data-message="${messageNumber}"] .audio-btn`
  );
  button.classList.add("playing");

  // Remove visual feedback when audio ends
  audio.onended = () => {
    button.classList.remove("playing");
    currentAudio = null;
  };
}

// Add animation to characters on hover
for (const character of document.querySelectorAll(".character-img")) {
  character.addEventListener("mouseover", () => {
    character.style.transform = "scale(1.05)";
  });

  character.addEventListener("mouseout", () => {
    character.style.transform = "scale(1)";
  });
}

// Navbar toggle animation
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");

navbarToggler.addEventListener("click", () => {
  navbarToggler.classList.toggle("active");
});

// Add smooth scrolling for navigation
for (const anchor of document.querySelectorAll('a[href^="#"]')) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
}

// Add responsive font sizing
function adjustFontSize() {
  if (window.innerWidth < 768) {
    document.documentElement.style.fontSize = "14px";
  } else {
    document.documentElement.style.fontSize = "16px";
  }
}

// Initial call and add event listener for resize
adjustFontSize();
window.addEventListener("resize", adjustFontSize);
