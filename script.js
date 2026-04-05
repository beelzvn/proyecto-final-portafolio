window.addEventListener("load", () => {
    const preloader = document.querySelector("#preloader");
    const preloaderImg = document.querySelector("#preloader img");
    const headerLogo = document.querySelector(".img-logo");

    const headerLogoRect = headerLogo.getBoundingClientRect();
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const tl = gsap.timeline();

    tl.to(preloaderImg, {
        y: -(centerY - headerLogoRect.top - (headerLogoRect.height / 1.9)),
        duration: "3.5",
        ease: "power3.inOut"
    })
    tl.to(preloader, {
        opacity: 0,
        display: "none",
        duration: 1,
        ease: "power2.inOut"
    }, "-=0.1");
});



window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    const header = document.querySelector("header");
    const logoImg = document.querySelector(".img-logo");

    if (currentScroll > 50) {
        gsap.to(logoImg, { 
            scale: 0.7, 
            duration: 0.3, 
            ease: "power2.out" 
        });
        
        gsap.to(header, { 
            paddingTop: "1px",
            paddingBottom: "1px",
            duration: 0.3, 
            ease: "power2.out" 
        });

    } else {
        gsap.to(logoImg, { 
            scale: 1, 
            duration: 0.3, 
            ease: "power2.out" 
        });

        gsap.to(header, { 
            paddingTop: "5px",
            paddingBottom: "5px", 
            duration: 0.3, 
            ease: "power2.out" 
        });
    }
});