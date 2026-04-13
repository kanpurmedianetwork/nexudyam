// THE INDIE PALETTE: GSAP & SCROLLTRIGGER LOGIC
document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP Plugin
    gsap.registerPlugin(ScrollTrigger);

    // 1. Header Scrolled State (Vanilla fallback but perfectly fine)
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. PARALLAX OBSIDIAN GLOB (GSAP SCROLL SCRUB)
    // As the user scrolls down, the glob slowly rotates and scales up slightly
    gsap.to("#bg-blob", {
        rotation: 45,
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5 // 1.5 seconds smoothing
        }
    });

    // 3. WIREFRAME CIRCLE PARALLAX (Foreground shift)
    gsap.to(".circle-1", {
        y: 200, rotation: 20, ease: "none",
        scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1 }
    });
    gsap.to(".circle-2", {
        y: -150, x: -100, ease: "none",
        scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 2 }
    });

    // 4. KINETIC TEXT HERO REVEALS
    // Elements fade and translate simultaneously on load
    const heroTl = gsap.timeline();
    heroTl.from(".hero-subtitle", { y: 20, opacity: 0, duration: 1, ease: "power3.out" })
          .from(".scroll-kinetic-hero", { y: 50, opacity: 0, duration: 1.2, ease: "power3.out" }, "-=0.8")
          .from(".kinetic-fade", { opacity: 0, duration: 1, stagger: 0.2 }, "-=0.5")
          .from(".hero-cta-box", { y: 20, opacity: 0, duration: 0.8 }, "-=0.8");

    // Huge Typography scroll scrub (text slowly fades and translates up as you scroll past)
    gsap.to(".scroll-kinetic-hero", {
        y: -100,
        opacity: 0.1,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // 5. SERVICES ROWS ANIMATION
    // Line grows, then text fades up when scrolled into view
    const rows = gsap.utils.toArray('.gsap-row');
    rows.forEach(row => {
        const line = row.querySelector('.line-grow');
        const content = row.querySelector('.list-row');
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: row,
                start: "top 85%", // trigger when 85% from top
                toggleActions: "play reverse play reverse"
            }
        });

        tl.from(line, { width: 0, duration: 0.8, ease: "power2.out" })
          .from(content, { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");
    });

    // 6. HORIZONTAL SCROLL PINNING (THE RLY EXPERIENCE)
    // Only apply on non-mobile screens
    if (window.innerWidth > 992) {
        let hContainer = document.querySelector(".h-scroll-container");
        let sections = gsap.utils.toArray(".h-panel");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".horizontal-scroll-section",
                pin: true,
                scrub: 1,
                // The pinning distance depends on how many sections there are (viewport widths)
                end: () => "+=" + document.querySelector(".h-scroll-container").offsetWidth
            }
        });
    }

    // 7. MEGA FOOTER TEXT PARALLAX
    gsap.from(".gsap-footer-type", {
        y: 150,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".mega-footer-text",
            start: "top 90%",
            end: "bottom bottom",
            scrub: 1
        }
    });
});
