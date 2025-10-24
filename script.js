addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = Math.min(1, scrollY / documentHeight); // Normalize scroll to 0-1

    // Animate --distance based on scroll progress
    document.body.style.setProperty("--distance", `${scrollProgress}`);

    // Animate --deg based on scroll position for a subtle rotation effect
    const deg = (scrollY * 0.1) % 360; // Rotate 0.1 degrees per pixel scrolled, looping at 360
    document.body.style.setProperty("--deg", `${deg}deg`);
});