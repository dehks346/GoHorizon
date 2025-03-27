document.addEventListener('DOMContentLoaded', function() {
    // Logo data - replace with your actual logos
    const logos = [
      { src: '/assets/images/paypal.png', alt: 'Company 1' },
      { src: '/assets/images/master.png', alt: 'Company 2' },
      { src: '/assets/images/aws.png', alt: 'Company 3' },
      { src: '/assets/images/slack.png', alt: 'Company 4' },
      { src: '/assets/images/github.png', alt: 'Company 6' },
      { src: '/assets/images/azure.png', alt: 'Company 6' },
      { src: '/assets/images/stack.png', alt: 'Company 6' },
      { src: '/assets/images/js.png', alt: 'Company 6' },
      { src: '/assets/images/adobe.png', alt: 'Company 6' }




    ];
    
    const track = document.querySelector('.logo-track');
    const container = document.querySelector('.logo-carousel-container');
    const pauseBtn = document.getElementById('pauseBtn');
    const playBtn = document.getElementById('playBtn');
    const speedSlider = document.getElementById('speedSlider');
    
    let animationId;
    let isPaused = false;
    let speed = 1; // pixels per frame
    
    // Create initial logo elements
    function createLogos() {
      track.innerHTML = '';
      
      // Create enough copies to fill the container width multiple times
      const copiesNeeded = Math.ceil((container.offsetWidth * 3) / (logos.length * 150)) + 1;
      
      for (let i = 0; i < copiesNeeded; i++) {
        logos.forEach(logo => {
          const logoItem = document.createElement('div');
          logoItem.className = 'logo-item';
          
          const img = document.createElement('img');
          img.src = logo.src;
          img.alt = logo.alt;
          
          logoItem.appendChild(img);
          track.appendChild(logoItem);
        });
      }
    }
    
    // Animation function
    function animate() {
      if (!isPaused) {
        // Move the track left
        track.style.transform = `translateX(${-position}px)`;
        position += speed;
        
        // If we've scrolled past a complete set, reset position to create infinite loop
        const itemWidth = 150; // width of each logo item
        const resetPoint = logos.length * itemWidth;
        
        if (position >= resetPoint) {
          position = 0;
        }
      }
      
      animationId = requestAnimationFrame(animate);
    }
    
    // Initialize
    let position = 0;
    createLogos();
    
    // Start animation
    animationId = requestAnimationFrame(animate);
    
    // Event listeners
    pauseBtn.addEventListener('click', function() {
      isPaused = true;
      pauseBtn.style.display = 'none';
      playBtn.style.display = 'block';
    });
    
    playBtn.addEventListener('click', function() {
      isPaused = false;
      playBtn.style.display = 'none';
      pauseBtn.style.display = 'block';
    });
    
    speedSlider.addEventListener('input', function() {
      speed = this.value / 2; // Adjust speed based on slider value
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
      createLogos();
    });
  });