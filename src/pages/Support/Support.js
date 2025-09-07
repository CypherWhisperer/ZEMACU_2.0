// Support Page JavaScript
// Handles user interactions and animations

document.addEventListener('DOMContentLoaded', function() {
  initializeAnimations();
  initializeInteractions();
});

// Initialize scroll-based animations
function initializeAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections for fade-in animation
  const sections = document.querySelectorAll('.section-title, .content-grid, .payment-grid, .gratitude-section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
}

// Initialize interactive elements
function initializeInteractions() {
  // Add hover effects to payment methods
  const paymentMethods = document.querySelectorAll('.payment-method');
  paymentMethods.forEach(method => {
    method.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px) scale(1.02)';
    });
    
    method.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(-2px) scale(1)';
    });
  });

  // Add click feedback to buttons
  const buttons = document.querySelectorAll('.cta-button');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Create ripple effect
      createRipple(e, this);
    });
  });

  // Add parallax effect to image cards
  window.addEventListener('scroll', throttle(handleParallax, 16));
}

function smoothScrollTo(target, duration = 800) {
  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + window.scrollY;
  const distance = end - start;
  const startTime = performance.now();

  function easeOutQuad(t) {
    return t * (2 - t); // easing function
  }

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutQuad(progress);

    window.scrollTo(0, start + distance * easedProgress);

    if (elapsed < duration) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

// Handle General Support button click
function handleGeneralSupport() {
  // Add your general support logic here
  showNotification('General Support', 'Redirecting to general support...', 'info');
  
  // Example: could redirect to a contact form or open a modal
  // window.location.href = '/contact';
  
  // A lil Delay on the notification ... 
  setTimeout(() => {
    smoothScrollTo(document.getElementById('payment-section'), 1000); // 1s scroll
  }, 800); // wait for notification
}

// Handle Project Support button click
function handleProjectSupport() {
  // Add your project support logic here
  showNotification('Project Support', 'Redirecting to project support...', 'info');
  
  // Example: could redirect to a projects page or open a modal
  // window.location.href = '/projects';
  
  // Same Delay as in `handleGeneralSupport` function above 
  setTimeout(() => {
    smoothScrollTo(document.getElementById('payment-section'), 1000);
  }, 800);
}

// Create ripple effect for button clicks
function createRipple(event, element) {
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
  const ripple = document.createElement('span');
  ripple.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 0.6s ease-out;
    pointer-events: none;
  `;
  
  element.style.position = 'relative';
  element.style.overflow = 'hidden';
  element.appendChild(ripple);
  
  ripple.addEventListener('animationend', () => {
    ripple.remove();
  });
}

// Add ripple animation CSS
const rippleCSS = document.createElement('style');
rippleCSS.textContent = `
  @keyframes ripple {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
`;
document.head.appendChild(rippleCSS);

// Simple notification system
function showNotification(title, message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <h4>${title}</h4>
      <p>${message}</p>
    </div>
  `;
  
  // Add notification styles
  const notificationCSS = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-left: 4px solid var(--primary-color);
    z-index: 1000;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.3s ease;
    max-width: 300px;
  `;
  
  notification.style.cssText = notificationCSS;
  document.body.appendChild(notification);
  
  // Trigger animation
  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Parallax effect for image cards
function handleParallax() {
  const imageCards = document.querySelectorAll('.image-card');
  const scrolled = window.pageYOffset;
  
  imageCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const speed = 0.5;
    
    if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
      const yPos = scrolled * speed;
      card.style.transform = `translateY(${yPos * 0.1}px)`;
    }
  });
}

// Throttle function for performance optimization
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Copy payment information to clipboard
function copyToClipboard(text, element) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = element.textContent;
    element.textContent = 'Copied!';
    element.style.color = 'var(--primary-color)';
    
    setTimeout(() => {
      element.textContent = originalText;
      element.style.color = '';
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
}

// Add click-to-copy functionality
document.querySelectorAll('.method-number, .highlight').forEach(element => {
  element.style.cursor = 'pointer';
  element.title = 'Click to copy';
  
  element.addEventListener('click', function() {
    copyToClipboard(this.textContent.trim(), this);
  });
});