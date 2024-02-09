var currentDate = new Date();
var year = currentDate.getFullYear();
var month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because month indexes start from 0
var day = String(currentDate.getDate()).padStart(2, '0');
var formattedDate = `${year}-${month}-${day}`;
var missionsContainers = document.querySelectorAll('.missions');

missionsContainers.forEach(function (container) {
    var items = container.querySelectorAll('details');
    var anyItemDisplayed = false;

    items.forEach(function (item) {
        var itemDate = item.getAttribute('date');

        if (itemDate <= formattedDate) {
            item.style.display = 'block'; // Display the item
            anyItemDisplayed = true;
        } else {
            item.classList.add('hidden'); // Hide the item
        }
    });

    if (!anyItemDisplayed) {
        var missionsHeader = container.querySelector('h2');
        missionsHeader.style.display = 'block';
    }
});