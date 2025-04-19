console.log("Welcome to TechZone Computer Shop!");
function slideLeft() {
  const slider = document.getElementById('arrivalSlider');
  slider.scrollBy({ left: -250, behavior: 'smooth' });
}

function slideRight() {
  const slider = document.getElementById('arrivalSlider');
  slider.scrollBy({ left: 250, behavior: 'smooth' });
}

function slideLeftTop() {
  const slider = document.getElementById('topSellerSlider');
  slider.scrollBy({ left: -250, behavior: 'smooth' });
}

function slideRightTop() {
  const slider = document.getElementById('topSellerSlider');
  slider.scrollBy({ left: 250, behavior: 'smooth' });
}

function slideLeftBuild() {
  const slider = document.getElementById('buildBundleSlider');
  slider.scrollBy({ left: -250, behavior: 'smooth' });
}

function slideRightBuild() {
  const slider = document.getElementById('buildBundleSlider');
  slider.scrollBy({ left: 250, behavior: 'smooth' });
}

function slideLeftCategory(sliderId) {
  const slider = document.getElementById(sliderId);
  slider.scrollBy({ left: -250, behavior: 'smooth' });
}

function slideRightCategory(sliderId) {
  const slider = document.getElementById(sliderId);
  slider.scrollBy({ left: 250, behavior: 'smooth' });
}

  document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const footer = document.querySelector("footer");
  const customerServiceSection = document.getElementById("customer-service");
  const sections = document.querySelectorAll(".section");
  const noResultsMessage = document.getElementById("noResultsMessage");

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    let hasMatches = false;

    sections.forEach((section) => {
      const productCards = section.querySelectorAll(".product-card");
      let sectionHasMatches = false;

      productCards.forEach((card) => {
        const productName = card.querySelector("h3").textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
          card.style.display = "block";
          sectionHasMatches = true;
          hasMatches = true;
        } else {
          card.style.display = "none";
        }
      });

      section.style.display = sectionHasMatches ? "block" : "none";
    });

    noResultsMessage.style.display = hasMatches ? "none" : "block";

    // ✅ Always show footer and customer service
    if (footer) footer.style.display = "block";
    if (customerServiceSection) customerServiceSection.style.display = "block";
  });

  searchInput.addEventListener("blur", function () {
    if (searchInput.value === "") {
      sections.forEach((section) => {
        section.style.display = "block";
        section.querySelectorAll(".product-card").forEach((card) => {
          card.style.display = "block";
        });
      });
      if (footer) footer.style.display = "block";
      if (customerServiceSection) customerServiceSection.style.display = "block";
      noResultsMessage.style.display = "none";
    }
  });
});

function openModal(service) {
  const modal = document.getElementById("modal");
  const details = document.getElementById("modal-details");

  let content = "";
  if (service === "repair") {
    content = `<h2>PC Repair</h2><p>We fix hardware and software issues, troubleshoot blue screens, and replace broken parts.</p>`;
  } else if (service === "upgrade") {
    content = `<h2>System Upgrade</h2><p>Upgrade your RAM, SSD, GPU, or OS for faster and smoother performance.</p>`;
  } else if (service === "virus") {
    content = `<h2>Virus Removal</h2><p>We scan, remove, and protect your system from harmful malware and spyware.</p>`;
  }

  details.innerHTML = content;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function slideLeft(button) {
  const slider = button.nextElementSibling;
  slider.scrollBy({
    left: -slider.clientWidth,
    behavior: 'smooth'
  });
}

function slideRight(button) {
  const slider = button.previousElementSibling;
  slider.scrollBy({
    left: slider.clientWidth,
    behavior: 'smooth'
  });
}

