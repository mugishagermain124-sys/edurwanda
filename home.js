// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Button Interactions
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log("Action triggered: " + e.target.innerText);
            // Example: Smooth scroll to a section if it's a link button
            // window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // 2. Scroll Reveal Animation
    const revealCards = () => {
        const cards = document.querySelectorAll('.role-card');
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight - 100;

            if (cardTop < triggerPoint) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }
        });
    };

    // Run on scroll
    window.addEventListener('scroll', revealCards);
    
    // Run once on load in case cards are already in view
    revealCards();
});