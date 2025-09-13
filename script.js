document.addEventListener("DOMContentLoaded", () => {
  // Set current year
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  // Simple navigation with smooth scrolling
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update active nav
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  // Form handling
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name && email && message) {
      alert('Pesan berhasil dikirim! (Demo)\n\nTerima kasih ' + name + ', pesan Anda telah diterima.');
      form.reset();
    } else {
      alert('Mohon lengkapi semua field!');
    }
  });

  // Optional: Intersection Observer for auto-highlighting nav on scroll
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '-50px 0px -50px 0px'
  });

  // Observe all sections
  sections.forEach(section => observer.observe(section));
});
