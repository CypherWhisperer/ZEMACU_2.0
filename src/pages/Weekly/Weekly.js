class WeeklyProgramSlider {
  constructor() {
    this.currentSlide = 0;
    this.totalSlides = 5;
    this.isAutoPlaying = true;
    this.autoPlayInterval = null;
    this.autoPlayDelay = 5000; // 5 seconds
    
    this.sliderTrack = document.getElementById('sliderTrack');
    this.indicators = document.querySelectorAll('.indicator');
    this.prevBtn = document.getElementById('prevBtn');
    this.nextBtn = document.getElementById('nextBtn');
    this.cards = document.querySelectorAll('.program-card');
    
    this.init();
  }
  
  init() {
    this.bindEvents();
    this.startAutoPlay();
    this.updateSlider(0, false); // Initialize without animation
  }
  
  bindEvents() {
    // Navigation buttons
    this.prevBtn.addEventListener('click', () => this.prevSlide());
    this.nextBtn.addEventListener('click', () => this.nextSlide());
    
    // Indicators
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => this.goToSlide(index));
    });
    
    // Pause auto-play on hover
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', () => this.pauseAutoPlay());
    sliderContainer.addEventListener('mouseleave', () => this.resumeAutoPlay());
    
    // Pause auto-play on focus (for accessibility)
    sliderContainer.addEventListener('focusin', () => this.pauseAutoPlay());
    sliderContainer.addEventListener('focusout', () => this.resumeAutoPlay());
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => this.handleKeydown(e));
    
    // Touch/swipe support
    this.addTouchSupport();
  }
  
  updateSlider(slideIndex, animate = true) {
    if (!animate) {
      this.sliderTrack.style.transition = 'none';
    } else {
      this.sliderTrack.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    }
    
    // Update transform
    const translateX = -slideIndex * 100;
    this.sliderTrack.style.transform = `translateX(${translateX}%)`;
    
    // Update active states
    this.updateActiveStates(slideIndex);
    
    if (!animate) {
      // Restore transition after a brief delay
      setTimeout(() => {
        this.sliderTrack.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      }, 50);
    }
  }
  
  updateActiveStates(slideIndex) {
    // Update cards
    this.cards.forEach((card, index) => {
      card.classList.toggle('active', index === slideIndex);
    });
    
    // Update indicators
    this.indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === slideIndex);
    });
    
    this.currentSlide = slideIndex;
  }
  
  nextSlide() {
    const nextIndex = (this.currentSlide + 1) % this.totalSlides;
    this.goToSlide(nextIndex);
  }
  
  prevSlide() {
    const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.goToSlide(prevIndex);
  }
  
  goToSlide(index) {
    if (index === this.currentSlide) return;
    
    this.updateSlider(index);
    this.resetAutoPlay();
  }
  
  startAutoPlay() {
    if (!this.isAutoPlaying) return;
    
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoPlayDelay);
  }
  
  pauseAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }
  
  resumeAutoPlay() {
    if (this.isAutoPlaying && !this.autoPlayInterval) {
      this.startAutoPlay();
    }
  }
  
  resetAutoPlay() {
    this.pauseAutoPlay();
    this.resumeAutoPlay();
  }
  
  handleKeydown(event) {
    // Only handle keyboard events when slider is in focus
    const sliderContainer = document.querySelector('.slider-container');
    if (!sliderContainer.contains(document.activeElement)) return;
    
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        this.prevSlide();
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.nextSlide();
        break;
      case ' ': // Spacebar
        event.preventDefault();
        this.toggleAutoPlay();
        break;
    }
  }
  
  toggleAutoPlay() {
    this.isAutoPlaying = !this.isAutoPlaying;
    
    if (this.isAutoPlaying) {
      this.startAutoPlay();
    } else {
      this.pauseAutoPlay();
    }
  }
  
  addTouchSupport() {
    let startX = 0;
    let endX = 0;
    const threshold = 50; // Minimum swipe distance
    
    this.sliderTrack.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      this.pauseAutoPlay();
    }, { passive: true });
    
    this.sliderTrack.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      this.handleSwipe(startX, endX, threshold);
      this.resumeAutoPlay();
    }, { passive: true });
  }
  
  handleSwipe(startX, endX, threshold) {
    const deltaX = startX - endX;
    
    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        // Swipe left - next slide
        this.nextSlide();
      } else {
        // Swipe right - previous slide
        this.prevSlide();
      }
    }
  }
  
  // Public method to destroy the slider
  destroy() {
    this.pauseAutoPlay();
    // Remove event listeners if needed
  }
}

// Initialize the slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Small delay to ensure all other scripts have loaded
  setTimeout(() => {
    window.weeklySlider = new WeeklyProgramSlider();
  }, 100);
});

// Add some additional interactive features
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll reveal animation for cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
      }
    });
  }, observerOptions);
  
  // Observe hero section
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    observer.observe(heroSection);
  }
  
  // Add loading state handling
  const slider = document.querySelector('.slider-container');
  if (slider) {
    slider.style.opacity = '0';
    slider.style.transform = 'translateY(20px)';
    
    // Animate in after a brief delay
    setTimeout(() => {
      slider.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      slider.style.opacity = '1';
      slider.style.transform = 'translateY(0)';
    }, 300);
  }
});