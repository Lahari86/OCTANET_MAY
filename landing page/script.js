// JavaScript for search functionality (optional if you want to add functionality)

const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

searchBtn.addEventListener('click', function() {
    const searchTerm = searchInput.value;
    // Implement your search functionality here
    console.log('Searching for: ', searchTerm);
});



// Function to handle scroll event
function handleScroll() {
    var images = document.querySelectorAll('.shoe img');
    
    images.forEach(function(image) {
        if (isInViewport(image)) {
            image.classList.add('show');
        }
    });
}

// Initial check on page load
handleScroll();

// Listen for scroll event
window.addEventListener('scroll', handleScroll);


// JavaScript for smooth scrolling when clicking on navigation links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
