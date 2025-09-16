document.addEventListener("DOMContentLoaded", () => {
  // toggle nav
  const navToggle = document.getElementById("navToggle");
  const nav = document.querySelector(".nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  // set year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // simple form alert
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Terima kasih! Pesan terkirim (demo).");
      form.reset();
    });
  }
});
