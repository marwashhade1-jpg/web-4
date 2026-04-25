// Simple JavaScript for interactivity

// Function to toggle navigation on mobile (if needed in future)
function toggleNav() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('nav-open');
}

// Add event listener to navigation links for smooth scrolling or effects
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Simple visual feedback
            this.style.backgroundColor = '#34495e';
            setTimeout(() => {
                this.style.backgroundColor = '';
            }, 200);
        });
    });
    
    // Add a welcome message on the homepage
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        console.log('Welcome to AWS and GitHub for Students!');
    }
});

// Function to show a simple alert for learning purposes
function showLearningTip() {
    alert('Tip: Always commit your changes regularly when working on projects!');
}

// You can call showLearningTip() from HTML if desired, e.g., onclick="showLearningTip()"