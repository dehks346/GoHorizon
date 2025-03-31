document.addEventListener('DOMContentLoaded', function() {
  const TRUSTPILOT_DATA = {
    // MANUAL FALLBACK DATA - Update these values periodically
    rating: 0,
    reviews: 0,
    lastUpdated: "2023-11-20"
  };

  // Try to load official widget first
  initOfficialWidget();
  
  // If widget doesn't load within 3 seconds, use fallback
  setTimeout(() => {
    if (!document.querySelector('#trustpilot-widget iframe')) {
      console.log('Using fallback data');
      renderManualWidget(TRUSTPILOT_DATA);
    }
  }, 3000);
});

function initOfficialWidget() {
  // This will auto-init because we included Trustpilot's script
  // Verify your Business Unit ID is correct
  console.log('Attempting to load official Trustpilot widget...');
}

function renderManualWidget(data) {
  const widget = document.querySelector('.trustpilot-info');
  if (!widget) return;

  widget.innerHTML = `
    <div class="rating-display">
      <span class="rating-score">${data.rating.toFixed(1)}</span>
      <div class="trustpilot-stars" style="color:#00b67a">
        ${generateStars(data.rating)}
      </div>
    </div>
    <div class="reviews-count">
      <span>${data.reviews.toLocaleString()}</span> reviews on 
      <a href="https://www.trustpilot.com/review/gohorizon.co.uk" target="_blank" rel="noopener">
        <span class="trustpilot-brand">
          Trustpilot
          <svg class="trustpilot-check" viewBox="0 0 512 512" width="12" height="12">
            <path fill="#00B67A" d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm114.9 149.1L231.8 359.6c-1.1 1.1-2.9 3.5-5.1 3.5-2.3 0-3.8-1.6-5.1-2.9-1.3-1.3-78.9-75.9-78.9-75.9l-1.5-1.5c-.6-.9-1.1-2-1.1-3.2 0-1.2.5-2.3 1.1-3.2.6-.9 1.7-1.8 2.9-1.8 1.2 0 2 .6 2.9 1.3l.2.2 74.9 72.6L352 180.6c.9-.9 2-1.1 3.2-1.1 1.2 0 2.3.5 3.2 1.1l.2.2 9.6 9.6c.8.8 1.8 1.9 1.8 3.2-.1 1.3-.9 2.4-1.9 3.2l-1.4 1.4z"/>
          </svg>
        </span>
      </a>
    </div>
  `;
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  return '★'.repeat(fullStars) + (hasHalfStar ? '½' : '') + '☆'.repeat(5 - fullStars - (hasHalfStar ? 1 : 0));
}