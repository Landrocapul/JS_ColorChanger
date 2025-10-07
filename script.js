// Author: Your Name
// Section: Your Section
// Description: Changes the background color to a random color on button click and displays the color code.

document.addEventListener('DOMContentLoaded', () => {
    // Get the button and color code display elements by their IDs
    const button = document.getElementById('colorButton');
    const colorCode = document.getElementById('colorCode');

    // Function to generate a random color in hex format
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Event listener for the button click
    button.addEventListener('click', () => {
        // Generate a new random color
        const randomColor = getRandomColor();

        // Change the background color of the page
        document.body.style.backgroundColor = randomColor;

        // Display the color code below the button
        colorCode.textContent = randomColor;

        // Change the button text after it is clicked
        button.textContent = 'Color Changed!';
    });
});
