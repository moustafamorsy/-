/**
 * 🍃 Premium Organic Butter Brand - Core Interaction Engine
 * Handles responsive mobile navigation and smart accordion UI.
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileNavigation();
    initFaqAccordion();
});

/**
 * Mobile Drawer Menu Handler
 */
function initMobileNavigation() {
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', () => {
        const isOpened = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isOpened);
        navMenu.classList.toggle('nav-open');
    });

    // Automatically close mobile menu if a link anchor is clicked
    const navLinks = document.querySelectorAll('.nav-item');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('nav-open')) {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('nav-open');
            }
        });
    });
}

/**
 * Smart FAQ Accordion Handler (Auto-collapse Mode)
 */
function initFaqAccordion() {
    const faqTriggers = document.querySelectorAll('.faq-trigger');
    
    if (faqTriggers.length === 0) return;

    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const faqItem = trigger.parentElement;
            const faqContent = trigger.nextElementSibling;
            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

            // Smooth Auto-Close: Shut down all other open FAQ cards safely
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                    const otherTrigger = item.querySelector('.faq-trigger');
                    const otherContent = item.querySelector('.faq-content');
                    
                    if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
                    if (otherContent) {
                        otherContent.style.maxHeight = null;
                        otherContent.setAttribute('aria-hidden', 'true');
                    }
                }
            });

            // Toggle active state on current clicked question panel
            if (isExpanded) {
                trigger.setAttribute('aria-expanded', 'false');
                faqContent.setAttribute('aria-hidden', 'true');
                faqContent.style.maxHeight = null;
                faqItem.classList.remove('active');
            } else {
                trigger.setAttribute('aria-expanded', 'true');
                faqContent.setAttribute('aria-hidden', 'false');
                faqContent.style.maxHeight = `${faqContent.scrollHeight}px`;
                faqItem.classList.add('active');
            }
        });
    });
}







// Append directly inside code listener structure
document.addEventListener('DOMContentLoaded', () => {
    // Existing functions...
    initFarmSlider();
});

/**
 * Interactive Farm Slider State Manager
 */
function initFarmSlider() {
    const tabButtons = document.querySelectorAll('.farm-tab-btn');
    const slides = document.querySelectorAll('.farm-slide');

    if (tabButtons.length === 0 || slides.length === 0) return;

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSlideIndex = button.getAttribute('data-slide');
            const targetSlide = document.getElementById(`slide-${targetSlideIndex}`);

            if (!targetSlide) return;

            // Remove active states across button lists
            tabButtons.forEach(btn => btn.classList.remove('active'));
            slides.forEach(slide => slide.classList.remove('active'));

            // Focus and trigger active visibility states on requested index elements
            button.classList.add('active');
            targetSlide.classList.add('active');
        });
    });
}


/**
 * 🍃 Organic Interaction Engine - Scroll Revelator
 * Triggers organic upward fade animations seamlessly upon viewport intersection.
 */
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
});

function initScrollAnimations() {
    // Select targets for trendy disclosure animations
    const animatedTargets = document.querySelectorAll('.reveal-on-scroll');
    
    if (animatedTargets.length === 0) return;

    const observerOptions = {
        root: null, // Uses viewport
        rootMargin: '0px 0px -10% 0px', // Triggers slightly before element enters view fully
        threshold: 0.05 // 5% visibility required
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the animation trigger class
                entry.target.classList.add('revealed');
                // Unobserve item once revealed to ensure optimal page rendering speeds
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedTargets.forEach(target => scrollObserver.observe(target));
}


/**
 * 🧈 Organic Micro-Interactions Engine - Cream Pulse Click Feedback
 * Creates a localized expanding fluid ripple on "Add to Cart" interactions.
 */
document.addEventListener('DOMContentLoaded', () => {
    initAddToCartFeedback();
});

function initAddToCartFeedback() {
    const actionButtons = document.querySelectorAll('.btn-product-add');

    if (actionButtons.length === 0) return;

    actionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create the dynamic wave element structure
            const wave = document.createElement('span');
            wave.classList.add('cream-pulse-wave');

            // Calculate precise click coordinates relative to the button bounds
            const rect = button.getBoundingClientRect();
            
            // Adjust calculation based on standard alignment vectors
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;

            // Make the circle width match the button's largest side profile
            const maxDimension = Math.max(rect.width, rect.height);
            wave.style.width = `${maxDimension}px`;
            wave.style.height = `${maxDimension}px`;

            // Position the wave precisely under the point of click
            wave.style.left = `${clickX - maxDimension / 2}px`;
            wave.style.top = `${clickY - maxDimension / 2}px`;

            // Clear any lingering old waves before painting the new pulse
            const activeWaves = button.querySelectorAll('.cream-pulse-wave');
            activeWaves.forEach(oldWave => oldWave.remove());

            // Append wave to button execution tree
            button.appendChild(wave);

            // Housekeeping: Garbage collect the node instantly after animation expires
            wave.addEventListener('animationend', () => {
                wave.remove();
            });
        });
    });
}
