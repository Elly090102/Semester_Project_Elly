// Select all images and the overlay
const images = document.querySelectorAll('.additional-image');
const popupOverlay = document.getElementById('popup-overlay');
const popupImg = document.getElementById('popup-img');

// Add click event to images
images.forEach(image => {
    image.addEventListener('click', () => {
        popupImg.src = image.src; // Set clicked image source
        popupOverlay.classList.add('active'); // Add active class
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
});

// Close popup when clicking outside the image
popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        popupOverlay.classList.remove('active'); // Remove active class
        document.body.style.overflow = 'auto'; // Allow scrolling
    }
});
