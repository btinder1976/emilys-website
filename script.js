const missions = [
  "Add one new thing you learned this week.",
  "Pick a favorite creature idea and give it a name.",
  "Choose one photo for your gallery with parent approval.",
  "Write one sentence about an adventure with Dad.",
  "Invent a new badge for something brave or creative you did.",
  "Add a STEM question you want to answer next.",
  "Rename one section so it sounds more like you."
];

const missionButton = document.querySelector("#missionButton");
const missionText = document.querySelector("#missionText");
const cursorGlow = document.querySelector(".cursor-glow");

if (missionButton && missionText) {
  missionButton.addEventListener("click", () => {
    const mission = missions[Math.floor(Math.random() * missions.length)];
    missionText.textContent = mission;
    missionButton.animate(
      [
        { transform: "scale(1) rotate(0deg)" },
        { transform: "scale(1.08) rotate(-2deg)" },
        { transform: "scale(1) rotate(0deg)" }
      ],
      { duration: 320, easing: "ease-out" }
    );
  });
}

window.addEventListener("pointermove", (event) => {
  if (!cursorGlow) return;
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

const ideaChips = document.querySelectorAll(".idea-chip");
ideaChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chip.textContent = "Great idea ✨";
    chip.setAttribute("aria-label", "Great idea selected");
  });
});
