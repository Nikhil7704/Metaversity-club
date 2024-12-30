// Toggle Navbar visibility on Hamburger menu click
document.getElementById('hamburger-menu').addEventListener('click', function() {
    const navbarItems = document.querySelector('.navbar-items');
    const navbar = document.querySelector('.navbar');
    
    // Toggle the visibility of navbar items
    navbarItems.classList.toggle('active');
    
    // Toggle the shadow of the navbar
    navbar.classList.toggle('no-shadow');
});
