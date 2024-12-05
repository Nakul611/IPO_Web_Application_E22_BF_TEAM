const ipoData = [
  {
    company: "Nova Agritech Ltd.",
    priceBand: "39 - 41",
    openDate: "2024-01-22",
    closeDate: "2024-01-24",
    issueSize: "143.81 Cr.",
    issueType: "Book Built",
    listingDate: "2024-01-30",
    rhpLink: "#",
    drhpLink: "#",
    logo: "assets/other item uploading soon/Website Assest/zerodha-logo.png",
  },
  // Add more IPOs as needed
];

// Dynamically render IPO cards
function renderIpoCards(data) {
  const ipoList = document.querySelector('.ipo-list');
  ipoList.innerHTML = '';

  data.forEach((ipo) => {
    const ipoCard = document.createElement('div');
    ipoCard.classList.add('ipo-card');
    ipoCard.innerHTML = `
      <div class="company-header">
        <img src="${STATIC_URL}${ipo.logo}" alt="${ipo.company} Logo" class="company-logo"/>
        <h3 class="company-name">${ipo.company}</h3>
      </div>
      <div class="ipo-details">
        <p class="price-band">PRICE BAND <br><br> <span class="details"> ${ipo.priceBand}</span></p>
        <p>OPEN <br><br> <span class="details">${ipo.openDate}</span></p> 
        <p>CLOSE <br><br> <span class="details">${ipo.closeDate}</span></p>
        <p>ISSUE SIZE <br><br> <span class="details">${ipo.issueSize}</span></p>
        <p>ISSUE TYPE <br><br> <span class="details">${ipo.issueType}</span></p>
        <p>LISTING DATE <br><br> <span class="details">${ipo.listingDate}</span></p>
      </div>
      <div class="action-buttons">
        <a href="${ipo.rhpLink}" class="btn rhp">RHP</a>
        <a href="${ipo.drhpLink}" class="btn drhp">DRHP</a>
      </div>
    `;
    ipoList.appendChild(ipoCard);
  });
}

// Toggle FAQ answers
document.addEventListener('DOMContentLoaded', () => {
  // Initialize IPO cards
  renderIpoCards(ipoData);

  // Set up FAQ toggling
  document.querySelectorAll('.faq-item h3').forEach((faq) => {
    faq.addEventListener('click', () => {
      const answer = faq.nextElementSibling;
      if (answer) {
        const isExpanded = faq.getAttribute('aria-expanded') === 'true';
        faq.setAttribute('aria-expanded', !isExpanded);
        answer.style.display = isExpanded ? 'none' : 'block';
        answer.setAttribute('aria-hidden', isExpanded);
      }
    });
  });

  // Dropdown toggling
  const links = document.querySelectorAll('.dropdown-link');
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default navigation
      const image = link.querySelector('.dropdown-icon');
      if (image) {
        image.classList.toggle('rotated');
      }
    });
  });
});
