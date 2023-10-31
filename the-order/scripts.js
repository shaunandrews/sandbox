// Badge Rotation
document.addEventListener('DOMContentLoaded', (event) => {
    const badge = document.querySelector('.badge');

    if (badge) { // Ensure the badge element exists

        // Using document to capture mouse movement anywhere on the page
        document.addEventListener('mousemove', (e) => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            // Calculate the position of the mouse relative to the center of the window
            const offsetX = (e.clientX - width / 2) / 30; // Adjust the division value to control the rotation sensitivity
            const offsetY = (e.clientY - height / 2) / 30;

            const rotationX = offsetY;
            const rotationY = -offsetX;

            badge.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const particlesContainer = document.querySelector('.particles');

    // Variables to capture mouse movement and its influence on particles
    let particleDirectionX = 1;
    let particleDirectionY = 1;
    let particleSpeedMultiplier = 4;

    // Listen to mouse movement on the document
    document.addEventListener('mousemove', (e) => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Calculate the position of the mouse relative to the center of the window
        particleDirectionX = (e.clientX - width / 2) / width;
        particleDirectionY = (e.clientY - height / 2) / height;

        // Using Pythagorean theorem to calculate speed multiplier
        particleSpeedMultiplier = Math.sqrt(particleDirectionX * particleDirectionX + particleDirectionY * particleDirectionY) * 5;
    });

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random size, position, and animation duration
        const size = Math.floor(Math.random() * 5) + 5;
        const positionX = Math.random() * 100;
        const positionY = Math.random() * 100;
        const animationDuration = (Math.random() * 5 + 2) / particleSpeedMultiplier; // Modify duration based on speed multiplier

        // Set particle's styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${positionX}%`;
        particle.style.top = `${positionY}%`;
        particle.style.animationDuration = `${animationDuration}s`;

        // Modify particle's moving direction based on mouse movement
        particle.style.animationName = `moveParticle${particleDirectionX > 0 ? 'Right' : 'Left'}${particleDirectionY > 0 ? 'Down' : 'Up'}`;

        // Append particle to the container
        particlesContainer.appendChild(particle);

        // Remove the particle after animation completes to avoid clutter
        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }

    // Generate particles at regular intervals
    setInterval(createParticle, 20);
});

