(function () {
  // --- 1. Navigation Toggle ---
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // --- 2. Theme Toggle (Light/Dark Mode) ---
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("light-mode");
      const isLight = body.classList.contains("light-mode");
      localStorage.setItem("theme", isLight ? "light" : "dark");
      themeToggle.innerHTML = isLight ? "☀️" : "🌙";
    });
    // Load saved preference
    if (localStorage.getItem("theme") === "light") {
      body.classList.add("light-mode");
      themeToggle.innerHTML = "☀️";
    }
  }

  // --- 3. Modal Logic (Safe Version) ---
  const modal = document.getElementById("courseModal");
  const closeBtn = document.getElementById("closeModal");
  const schoolCards = document.querySelectorAll(".card");

  const schoolData = {
    "School of Business": [
      "BCom",
      "Procurement",
      "Accounting",
      "HR Management",
    ],
    "School of Education": [
      "B.Ed Arts",
      "B.Ed Science",
      "Early Childhood Education",
    ],
    "School of Arts": ["Criminology", "Social Work", "Community Development"],
    "School of Physical and Live Sciences": [
      "Computer Science",
      "Mathematics",
      "Biology",
    ],
  };

  if (modal && closeBtn) {
    schoolCards.forEach((card) => {
      card.addEventListener("click", () => {
        const titleEl = card.querySelector(".card-title");
        if (!titleEl) return;

        const title = titleEl.innerText;
        const courses = schoolData[title] || ["Details coming soon..."];

        document.getElementById("modalTitle").innerText = title;
        document.getElementById("modalBody").innerHTML = `
          <p style="color: var(--muted); margin-bottom: 1rem;">Available Programs:</p>
          <ul style="padding-left: 1.2rem; line-height: 2;">
            ${courses.map((c) => `<li>${c}</li>`).join("")}
          </ul>
        `;
        modal.classList.add("is-open");
      });
    });

    closeBtn.onclick = () => modal.classList.remove("is-open");

    // Close modal if clicking outside the box
    window.onclick = (event) => {
      if (event.target === modal) modal.classList.remove("is-open");
    };
  }

  // --- 4. Contact Form ---
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");
  if (form && note) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      note.textContent = "Message sent successfully (Demo)!";
      form.reset();
    });
  }
})();
const backToTopBtn = document.getElementById("backToTop");

if (backToTopBtn) {
  backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  });
}

document.querySelector(".footer-bottom p").innerHTML =
  `&copy; ${new Date().getFullYear()} Makueni University College. All rights reserved.`;

  // --- ULTIMATE BACK TO TOP FIX ---
document.addEventListener('click', function(e) {
  // This looks for ANY element with the class 'to-top' or 'to-top-link'
  if (e.target.classList.contains('to-top') || e.target.closest('.to-top') || e.target.classList.contains('to-top-link')) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
});

// --- PROSPECTUS MODAL LOGIC ---
const prospectusModal = document.getElementById('prospectusModal');
const openProspectusBtn = document.getElementById('openProspectus'); // Ensure your button has this ID
const closeProspectusBtn = document.getElementById('closeProspectus');

if (openProspectusBtn && prospectusModal) {
  openProspectusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    prospectusModal.classList.add('is-active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling background
  });

  closeProspectusBtn.addEventListener('click', () => {
    prospectusModal.classList.remove('is-active');
    document.body.style.overflow = 'auto';
  });

  // Close if clicking outside the content
  prospectusModal.addEventListener('click', (e) => {
    if (e.target === prospectusModal) {
      prospectusModal.classList.remove('is-active');
      document.body.style.overflow = 'auto';
    }
  });
}