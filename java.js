// Example: Toggle the border animation on button click
const circleBorder = document.querySelector('.circle-border');
const toggleButton = document.querySelector('#toggle-button');

toggleButton.addEventListener('click', () => {
    circleBorder.classList.toggle('animate-border');
});
