var currentDate = new Date().toISOString().slice(0, 10);
var missionsContainers = document.querySelectorAll('.missions');

missionsContainers.forEach(function (container) {
    var items = container.querySelectorAll('details');
    var anyItemDisplayed = false;

    items.forEach(function (item) {
        var itemDate = item.getAttribute('date');

        if (itemDate <= currentDate) {
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