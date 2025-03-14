document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('portfolio-carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const indicators = document.getElementById('carousel-indicators');
    
    let currentIndex = 0;
    
    // Create indicators
    items.forEach((_, index) => {
      const indicator = document.createElement('div');
      indicator.classList.add('indicator');
      if (index === 0) indicator.classList.add('active');
      indicator.addEventListener('click', () => goToSlide(index));
      indicators.appendChild(indicator);
    });
    
    // Update carousel state
    function updateCarousel() {
      // Update transform
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Update active states
      items.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
      });
      
      // Update indicators
      const indicatorDots = indicators.querySelectorAll('.indicator');
      indicatorDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }
    
    // Go to specific slide
    function goToSlide(index) {
      currentIndex = index;
      updateCarousel();
    }
    
    // Next slide
    function nextSlide() {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    }
    
    // Previous slide
    function prevSlide() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-advance carousel
    let interval = setInterval(nextSlide, 5000);
    
    // Pause auto-advance on hover
    carousel.addEventListener('mouseenter', () => {
      clearInterval(interval);
    });
    
    carousel.addEventListener('mouseleave', () => {
      interval = setInterval(nextSlide, 5000);
    });
    
    // Initialize
    updateCarousel();
  });
