document.addEventListener('DOMContentLoaded', () => {
    // Channels Dropdown
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownButton.addEventListener('click', () => {
        dropdownMenu.classList.toggle('hidden');
    });

    // Direct Messages Dropdown
    const mydropdownButton = document.getElementById('mydropdownButton');
    const mydropdownMenu = document.getElementById('mydropdownMenu');
    mydropdownButton.addEventListener('click', () => {
        mydropdownMenu.classList.toggle('hidden');
    });
});
