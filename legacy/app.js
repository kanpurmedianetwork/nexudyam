gsap.registerPlugin(ScrollTrigger);

// Smooth reveal animation for all main sections
gsap.utils.toArray('.gs-reveal').forEach(function(elem) {
    gsap.from(elem, {
        scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});

// Optionally, refresh trigger sizes if needed over time
window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});
