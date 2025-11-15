// Simple fade-in animation
window.addEventListener("scroll", () => {
document.querySelectorAll(".section-title").forEach((el) => {
let top = el.getBoundingClientRect().top;
if (top < window.innerHeight - 50) {
el.style.opacity = 1;
el.style.transform = "translateY(0)";
}
});
});