// Function to toggle the visibility of the navigation drawer
function toggleDrawer() {
    // Find the navigation drawer element in the document
    var drawer = document.querySelector('.drawer');

    // Check if the current display property of the drawer is 'none' or an empty string
    // This is used to determine whether the drawer is currently hidden
    if (drawer.style.display === 'none' || drawer.style.display === '') {
        // If the drawer is hidden, set its display property to 'flex' to show it
        drawer.style.display = 'flex';
    } else {
        // If the drawer is visible, set its display property to 'none' to hide it
        drawer.style.display = 'none';
    }
}

/*function toggleDrawer() {: This line defines a function named toggleDrawer.
var drawer = document.querySelector('.drawer');: This line finds the HTML element with the class "drawer" in the document and assigns it to the variable drawer.
if (drawer.style.display === 'none' || drawer.style.display === '') {: This conditional statement checks if the current value of the display property of the drawer is either 'none' or an empty string. This is used to determine whether the drawer is currently hidden.
drawer.style.display = 'flex';: If the drawer is hidden (display is 'none' or an empty string), this line sets its display property to 'flex', making it visible.
} else {: If the drawer is not hidden (already visible), the code inside the else block will be executed.
drawer.style.display = 'none';: This line sets the display property of the drawer to 'none', hiding it.*/




// Select all anchor elements whose href attribute starts with "#"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Add a click event listener to each selected anchor element
    anchor.addEventListener('click', function (e) {
        // Prevent the default behavior of the click event (e.g., jumping to the anchor)
        e.preventDefault();

        // Find the target element by querying the document using the href attribute of the clicked anchor
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            // Scroll into view with a smooth animation
            behavior: 'smooth'
        });
    });
});


/*
document.querySelectorAll('a[href^="#"]'): Selects all anchor links with an href attribute starting with #.
anchor.addEventListener('click', function (e) {...}: Listens for a click on each selected anchor link.
e.preventDefault();: Prevents the default behavior (jumping to the section).
document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });: Scrolls to the target section smoothly.
*/







