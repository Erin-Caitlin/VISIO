$(document).ready(function () {
    const $carousel = $('.carousel');
    const $slides = $('.carousel-slide');
    const $indicators = $('.carousel-indicators .indicator');
    let currentIndex = 0;
    const totalSlides = $slides.length;

    // Initialize position
    $carousel.css('transform', `translateX(${currentIndex * -100}%)`);
    updateIndicators();  // Update the indicator on page load

    // Next button functionality
    $('.next-btn').on('click', function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        const offset = -currentIndex * 100;
        $carousel.css('transform', `translateX(${offset}%)`);
        updateIndicators();
    });

    // Indicator click functionality
    $indicators.on('click', function () {
        const index = $(this).data('index');
        currentIndex = index;
        const offset = -currentIndex * 100;
        $carousel.css('transform', `translateX(${offset}%)`);
        updateIndicators();
    });

    // Function to update the active indicator
    function updateIndicators() {
        $indicators.removeClass('active');
        $($indicators[currentIndex]).addClass('active');
    }

    // Function to update the active indicator and animate labels
    function updateIndicators() {
        $slides.removeClass('active');  // Remove active from all slides
        $($slides[currentIndex]).addClass('active');  // Add active to current slide

        $indicators.removeClass('active');
        $($indicators[currentIndex]).addClass('active');
    }
});
