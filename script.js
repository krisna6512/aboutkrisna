document.addEventListener("DOMContentLoaded", () => {
  // toggle nav mobile
  const navToggle = document.getElementById("navToggle");
  const siteHeader = document.querySelector(".site-header");
  navToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });

  // tahun footer otomatis
  document.getElementById("year").textContent = new Date().getFullYear();

  // reset form
  const resetBtn = document.getElementById("resetBtn");
  const form = document.getElementById("contactForm");
  if (resetBtn && form) {
    resetBtn.addEventListener("click", () => form.reset());
  }
});
