document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for animations
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });
    
    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000; // 2 seconds
      const step = target / (duration / 16); // 60fps
      let current = 0;
      
      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };
      
      // Start counter when in view
      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateCounter();
            counterObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      
      counterObserver.observe(counter);
    });
    
    // Parallax Effect
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    window.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed');
        const moveX = (x - 0.5) * 100 * speed;
        const moveY = (y - 0.5) * 100 * speed;
        
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    });
    
    // 3D Tilt Effect for Service Cards
    const cards = document.querySelectorAll('[data-tilt]');
    
    cards.forEach(card => {
      const maxTilt = parseFloat(card.getAttribute('data-tilt-max')) || 10;
      const speed = parseFloat(card.getAttribute('data-tilt-speed')) || 400;
      const perspective = parseFloat(card.getAttribute('data-tilt-perspective')) || 1000;
      
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xPercent = x / rect.width;
        const yPercent = y / rect.height;
        
        const tiltX = (0.5 - yPercent) * maxTilt;
        const tiltY = (xPercent - 0.5) * maxTilt;
        
        card.style.transition = `transform ${speed}ms ease-out`;
        card.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transition = `transform ${speed}ms ease-out`;
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      });
    });
  });