// Get current date
var currentDate = new Date().toISOString().slice(0,10);

// Get all list items
var items = document.querySelectorAll('.missions details');

// Loop through each item
items.forEach(function(item) {
    var itemDate = item.getAttribute('date');

    // Check if item's date is less than or equal to the current date
    if (itemDate <= currentDate) {
        item.style.display = 'block'; // Display the item
    } else {
        item.classList.add('hidden'); // Hide the item
    }
});