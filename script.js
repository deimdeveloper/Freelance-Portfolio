// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===== DARK/LIGHT MODE TOGGLE =====
const modeToggle = document.createElement("button");
modeToggle.id = "mode-toggle";
modeToggle.textContent = "🌙 Dark Mode";
document.querySelector("nav").appendChild(modeToggle);

// Load saved theme from localStorage
const currentMode = localStorage.getItem("theme");
if (currentMode === "light") {
  document.body.classList.add("light-mode");
  modeToggle.textContent = "☀️ Light Mode";
}

// Toggle mode on click
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  
  let mode = "dark";
  if (document.body.classList.contains("light-mode")) {
    mode = "light";
    modeToggle.textContent = "☀️ Light Mode";
  } else {
    modeToggle.textContent = "🌙 Dark Mode";
  }
  
  localStorage.setItem("theme", mode);
});
