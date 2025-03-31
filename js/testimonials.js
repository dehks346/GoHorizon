document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const track = document.getElementById('testimonialsTrack');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const indicators = document.getElementById('navIndicators');
    
    // Get all testimonials
    const testimonials = document.querySelectorAll('.testimonial');
    const totalSlides = testimonials.length;
    
    // Current slide index
    let currentIndex = 0;
    
    // Autoplay settings
    let autoplayEnabled = true;
    let autoplayInterval;
    
    // Create indicator dots
    function createIndicators() {
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.classList.add('nav-dot');
        if (i === 0) dot.classList.add('active');
        dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
        dot.addEventListener('click', () => goToSlide(i));
        indicators.appendChild(dot);
      }
    }
    
    // Update the active indicator
    function updateIndicators() {
      const dots = indicators.querySelectorAll('.nav-dot');
      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
    
    // Go to a specific slide
    function goToSlide(index) {
      currentIndex = index;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      updateIndicators();
      resetAutoplay();
    }
    
    // Go to the previous slide
    function goToPrevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      goToSlide(currentIndex);
    }
    
    // Go to the next slide
    function goToNextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      goToSlide(currentIndex);
    }
    
    // Event listeners
    prevButton.addEventListener('click', goToPrevSlide);
    nextButton.addEventListener('click', goToNextSlide);
    
    // Initialize
    createIndicators();
    startAutoplay();
  });