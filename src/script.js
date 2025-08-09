// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Pet Rock Interactions
const petRock = document.getElementById('rocky');
const statusIndicator = document.querySelector('.status-indicator span');
const statusDot = document.querySelector('.status-dot');

let rockMood = 'sitting';
let clickCount = 0;
let lastClickTime = 0;

const rockStates = [
    { status: 'Rocky is sitting', mood: 'content', color: '#10b981' },
    { status: 'Rocky is contemplating existence', mood: 'philosophical', color: '#8b5cf6' },
    { status: 'Rocky is achieving enlightenment', mood: 'zen', color: '#f59e0b' },
    { status: 'Rocky is judging your life choices', mood: 'judgmental', color: '#ef4444' },
    { status: 'Rocky is pretending to be asleep', mood: 'sneaky', color: '#6b7280' },
    { status: 'Rocky is having deep thoughts', mood: 'thinking', color: '#06b6d4' },
    { status: 'Rocky is being professionally stoic', mood: 'professional', color: '#10b981' }
];

function updateRockStatus() {
    const randomState = rockStates[Math.floor(Math.random() * rockStates.length)];
    statusIndicator.textContent = randomState.status;
    statusDot.style.background = randomState.color;
    
    // Add subtle animation based on mood
    petRock.style.transform = randomState.mood === 'zen' ? 'scale(1.05)' : 'scale(1)';
}

// Rock click interactions
petRock?.addEventListener('click', (e) => {
    const currentTime = Date.now();
    
    // Prevent spam clicking
    if (currentTime - lastClickTime < 500) return;
    lastClickTime = currentTime;
    
    clickCount++;
    
    // Different responses based on click count
    if (clickCount === 1) {
        statusIndicator.textContent = 'Rocky noticed you clicked';
        statusDot.style.background = '#f59e0b';
    } else if (clickCount === 3) {
        statusIndicator.textContent = 'Rocky is mildly annoyed';
        statusDot.style.background = '#ef4444';
        petRock.style.animation = 'rockShake 0.5s ease-in-out';
    } else if (clickCount === 5) {
        statusIndicator.textContent = 'Rocky is questioning your maturity';
        statusDot.style.background = '#8b5cf6';
    } else if (clickCount === 10) {
        statusIndicator.textContent = 'Rocky has achieved ultimate patience';
        statusDot.style.background = '#10b981';
        petRock.style.filter = 'brightness(1.2)';
    } else if (clickCount > 15) {
        statusIndicator.textContent = 'Rocky is impressed by your persistence';
        statusDot.style.background = '#06b6d4';
        // Reset click count
        setTimeout(() => {
            clickCount = 0;
            updateRockStatus();
            petRock.style.filter = 'none';
            petRock.style.animation = 'rockBreathe 4s ease-in-out infinite';
        }, 3000);
    } else {
        updateRockStatus();
    }
    
    // Reset animation
    setTimeout(() => {
        petRock.style.animation = 'rockBreathe 4s ease-in-out infinite';
    }, 500);
});

// Add shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes rockShake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-2px); }
        75% { transform: translateX(2px); }
    }
`;
document.head.appendChild(style);

// Random status updates
setInterval(() => {
    if (clickCount === 0) {
        updateRockStatus();
    }
}, 8000);

// Form submission with humor
const contactForm = document.querySelector('.contact-form');
contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const inquiryType = contactForm.querySelector('select').value;
    
    let responseMessage = '';
    
    switch(inquiryType) {
        case 'rocky-not-sitting':
            responseMessage = 'Have you tried turning Rocky off and on again? (Just kidding, Rocky is always on.)';
            break;
        case 'too-quiet':
            responseMessage = 'This is a feature, not a bug. Rocky\'s silence is premium quality.';
            break;
        case 'existential':
            responseMessage = 'Rocky will contemplate your existential crisis and get back to you in 3-5 business days.';
            break;
        case 'sales':
            responseMessage = 'Our sales team (Rocky) will contact you shortly via telepathic communication.';
            break;
        case 'support':
            responseMessage = 'Technical support has been notified. Rocky is debugging the issue by sitting very still.';
            break;
        default:
            responseMessage = 'Thank you for your message! Rocky has received it and is processing it at rock speed.';
    }
    
    // Show response
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = responseMessage;
    submitButton.style.background = '#10b981';
    
    setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.style.background = '#2563eb';
        contactForm.reset();
    }, 4000);
});

// Pricing card interactions
const pricingCards = document.querySelectorAll('.pricing-card');
pricingCards.forEach(card => {
    const button = card.querySelector('.btn');
    
    button?.addEventListener('click', (e) => {
        e.preventDefault();
        
        const planName = card.querySelector('h3').textContent;
        const originalText = button.textContent;
        
        if (planName.includes('Basic')) {
            button.textContent = 'Rocky Basic is thinking about it...';
        } else if (planName.includes('Pro')) {
            button.textContent = 'Rocky Pro approves this decision!';
        } else if (planName.includes('Enterprise')) {
            button.textContent = 'Contacting the Rock Council...';
        }
        
        button.style.background = '#10b981';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 3000);
    });
});

// Demo button interaction
const demoButton = document.querySelector('.btn-secondary');
demoButton?.addEventListener('click', (e) => {
    e.preventDefault();
    
    const originalText = demoButton.innerHTML;
    demoButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading Demo...';
    
    setTimeout(() => {
        demoButton.innerHTML = '<i class="fas fa-check"></i> Demo Complete!';
        demoButton.style.background = 'rgba(16, 185, 129, 0.2)';
        demoButton.style.borderColor = '#10b981';
        demoButton.style.color = '#10b981';
        
        setTimeout(() => {
            demoButton.innerHTML = originalText;
            demoButton.style.background = '';
            demoButton.style.borderColor = '';
            demoButton.style.color = '';
        }, 2000);
    }, 2000);
});

// Testimonial rotation
const testimonials = document.querySelectorAll('.testimonial-card');
let currentTestimonial = 0;

function highlightTestimonial() {
    testimonials.forEach((testimonial, index) => {
        if (index === currentTestimonial) {
            testimonial.style.transform = 'scale(1.02)';
            testimonial.style.boxShadow = '0 10px 25px rgba(37, 99, 235, 0.15)';
        } else {
            testimonial.style.transform = 'scale(1)';
            testimonial.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
        }
    });
    
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
}

// Highlight testimonials every 5 seconds
setInterval(highlightTestimonial, 5000);

// Easter egg: Konami code for super rocky
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Activate super rocky mode
        petRock.style.background = 'linear-gradient(145deg, #ffd700, #ffed4e)';
        petRock.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.8)';
        statusIndicator.textContent = 'SUPER ROCKY ACTIVATED!';
        statusDot.style.background = '#ffd700';
        
        // Add sparkle effect
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.innerHTML = '✨';
                sparkle.style.position = 'absolute';
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = Math.random() * 100 + '%';
                sparkle.style.fontSize = '2rem';
                sparkle.style.pointerEvents = 'none';
                sparkle.style.animation = 'sparkle 2s ease-out forwards';
                
                petRock.parentElement.appendChild(sparkle);
                
                setTimeout(() => sparkle.remove(), 2000);
            }, i * 200);
        }
        
        // Add sparkle animation
        if (!document.querySelector('#sparkle-style')) {
            const sparkleStyle = document.createElement('style');
            sparkleStyle.id = 'sparkle-style';
            sparkleStyle.textContent = `
                @keyframes sparkle {
                    0% { opacity: 1; transform: scale(0) rotate(0deg); }
                    50% { opacity: 1; transform: scale(1) rotate(180deg); }
                    100% { opacity: 0; transform: scale(0) rotate(360deg); }
                }
            `;
            document.head.appendChild(sparkleStyle);
        }
        
        // Reset after 10 seconds
        setTimeout(() => {
            petRock.style.background = 'linear-gradient(145deg, #8b7355, #6b5b47)';
            petRock.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3), inset 0 5px 10px rgba(255, 255, 255, 0.1)';
            updateRockStatus();
            konamiCode = [];
        }, 10000);
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Initial rock status
    updateRockStatus();
    
    // Add loading animation to buttons
    document.querySelectorAll('.btn-primary').forEach(btn => {
        if (!btn.closest('.contact-form') && !btn.closest('.pricing-card')) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const originalText = btn.textContent;
                btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                
                setTimeout(() => {
                    btn.textContent = originalText;
                }, 2000);
            });
        }
    });
});

// Scroll animations
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

// Observe all feature cards and testimonials
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .testimonial-card, .pricing-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
