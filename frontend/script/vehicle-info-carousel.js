
    // document.addEventListener('DOMContentLoaded', function() {
        const track = document.getElementById('carousel-track');
        const slides = track.getElementsByClassName('slide');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const dots = document.getElementsByClassName('dot');
        
        let currentSlide = 0;
        const slideWidth = 100; // 100%

        // Initialize
        updateCarousel();

        // Previous button click
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateCarousel();
        });

        // Next button click
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            updateCarousel();
        });

        // Dot navigation
        Array.from(dots).forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateCarousel();
            });
        });

        function updateCarousel() {
            // Update track position
            track.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
            
            // Update dots
            Array.from(dots).forEach((dot, index) => {
                dot.classList.toggle('bg-white', index === currentSlide);
                dot.classList.toggle('bg-white/50', index !== currentSlide);
            });
        }

        // // Auto-play
        // setInterval(() => {
        //     currentSlide = (currentSlide + 1) % slides.length;
        //     updateCarousel();
        // }, 5000); // Change slide every 5 seconds
    // });
