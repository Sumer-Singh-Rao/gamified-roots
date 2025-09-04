// HackNRun Gamified Learning Platform JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.getElementById('header');
    let lastScrollTop = 0;

    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    }

    window.addEventListener('scroll', handleScroll);

    // Smooth scrolling for navigation links
    window.scrollToSection = function(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = header.offsetHeight;
            const targetPosition = element.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Intersection Observer for animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }
        });
    }, observerOptions);

    // Observe elements for animations
    const animatedElements = document.querySelectorAll(
        '.feature-card, .subject-card, .platform-card, .demo-showcase, .demo-cta'
    );

    animatedElements.forEach(element => {
        // Set initial state for animation
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px) scale(0.95)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Observe the element
        observer.observe(element);
    });

    // Add interactive hover effects to cards
    const cards = document.querySelectorAll('.feature-card, .subject-card, .platform-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Demo video interaction
    const demoVideo = document.querySelector('.video-placeholder');
    if (demoVideo) {
        demoVideo.addEventListener('click', function() {
            // Simulate video play (you can replace this with actual video functionality)
            const videoContent = this.querySelector('.video-content');
            const originalContent = videoContent.innerHTML;
            
            videoContent.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
                    <div style="width: 64px; height: 64px; border: 4px solid rgba(255,255,255,0.3); border-top: 4px solid white; border-radius: 50%; animation: spin 1s linear infinite;"></div>
                    <p style="margin-top: 1rem;">Loading Demo...</p>
                </div>
            `;
            
            // Add spin animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
            
            // Simulate loading
            setTimeout(() => {
                videoContent.innerHTML = `
                    <div style="text-align: center;">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                            <line x1="9" y1="9" x2="9.01" y2="9"/>
                            <line x1="15" y1="9" x2="15.01" y2="9"/>
                        </svg>
                        <p style="margin-top: 1rem;">Demo Coming Soon!</p>
                        <p style="font-size: 0.9rem; opacity: 0.8; margin-top: 0.5rem;">Interactive gameplay will be available in the full app</p>
                    </div>
                `;
                
                // Reset after 3 seconds
                setTimeout(() => {
                    videoContent.innerHTML = originalContent;
                }, 3000);
            }, 2000);
        });
    }

    // Parallax effect for floating elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-icon, .floating-dot');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
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
            
            // Add ripple animation
            if (!document.getElementById('ripple-style')) {
                const rippleStyle = document.createElement('style');
                rippleStyle.id = 'ripple-style';
                rippleStyle.textContent = `
                    @keyframes ripple {
                        to {
                            transform: scale(2);
                            opacity: 0;
                        }
                    }
                    .btn {
                        position: relative;
                        overflow: hidden;
                    }
                `;
                document.head.appendChild(rippleStyle);
            }
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Statistics counter animation
    const stats = document.querySelectorAll('.stat-number');
    
    const animateStats = () => {
        stats.forEach(stat => {
            const target = stat.textContent;
            const isPercentage = target.includes('%');
            const isPlus = target.includes('+');
            const numTarget = parseInt(target.replace(/[^\d]/g, ''));
            
            let current = 0;
            const increment = numTarget / 50; // Animation duration
            
            const updateStat = () => {
                if (current < numTarget) {
                    current += increment;
                    const displayValue = Math.ceil(current);
                    stat.textContent = displayValue + (isPercentage ? '%' : '') + (isPlus ? '+' : '');
                    requestAnimationFrame(updateStat);
                } else {
                    stat.textContent = target; // Ensure final value is exact
                }
            };
            
            updateStat();
        });
    };

    // Trigger stats animation when hero section is visible
    const heroObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(animateStats, 1000); // Delay for better effect
                heroObserver.unobserve(entry.target); // Only animate once
            }
        });
    }, { threshold: 0.5 });

    const heroSection = document.getElementById('hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }

    // Mobile menu toggle (for future enhancement)
    // This would be used if you add a mobile hamburger menu
    window.toggleMobileMenu = function() {
        const nav = document.querySelector('.nav');
        nav.classList.toggle('active');
    };

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Press 'H' to go to hero
        if (e.key.toLowerCase() === 'h' && !e.ctrlKey && !e.altKey) {
            scrollToSection('hero');
        }
        // Press 'F' to go to features
        if (e.key.toLowerCase() === 'f' && !e.ctrlKey && !e.altKey) {
            scrollToSection('features');
        }
        // Press 'S' to go to subjects
        if (e.key.toLowerCase() === 's' && !e.ctrlKey && !e.altKey) {
            scrollToSection('subjects');
        }
        // Press 'D' to go to demo
        if (e.key.toLowerCase() === 'd' && !e.ctrlKey && !e.altKey) {
            scrollToSection('demo');
        }
    });

    console.log('🎮 HackNRun Platform Loaded Successfully!');
    console.log('🚀 Ready to transform rural education through gamification');
});