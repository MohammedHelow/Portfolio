// Dark/Light mode toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const userTheme = localStorage.getItem('theme');
if (userTheme === 'dark') body.classList.add('dark');
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
  themeToggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});
themeToggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';

// Scroll-to-top button
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Expandable project cards
const expandBtns = document.querySelectorAll('.expand-btn');
expandBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const card = this.closest('.project-card');
    card.classList.toggle('expanded');
    this.textContent = card.classList.contains('expanded') ? '-' : '+';
  });
});

// Section scroll-in animations
const animatedSections = document.querySelectorAll('.section-animate');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
animatedSections.forEach(section => observer.observe(section));

// Mobile nav menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
    navLinks.classList.remove('open');
  }
});

// Skills progress bar animation
function animateSkillBars() {
  document.querySelectorAll('.progress').forEach(bar => {
    const value = bar.getAttribute('data-skill');
    bar.style.width = value + '%';
  });
}
window.addEventListener('DOMContentLoaded', animateSkillBars);

// Contact form validation
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    if (!name || !email || !message) {
      formMsg.textContent = 'Please fill in all fields.';
      formMsg.style.color = 'red';
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      formMsg.textContent = 'Please enter a valid email address.';
      formMsg.style.color = 'red';
      return;
    }
    formMsg.textContent = 'Thank you for your message! (Form is for demo only)';
    formMsg.style.color = 'var(--primary)';
    contactForm.reset();
  });
} 