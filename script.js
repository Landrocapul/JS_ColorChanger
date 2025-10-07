document.addEventListener('DOMContentLoaded', () => {
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

    // Function to check if the background color is light or dark
    function isLightColor(color) {
        const hex = color.substring(1); // Remove '#'
        const rgb = parseInt(hex, 16); // Convert hex to RGB
        const r = (rgb >> 16) & 0xff;
        const g = (rgb >>  8) & 0xff;
        const b = (rgb >>  0) & 0xff;

        // Using the luminance formula for brightness
        const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        return brightness > 128;
    }

    // Event listener for the button click
    button.addEventListener('click', () => {
        // Generate a new random color
        const randomColor = getRandomColor();

        // Change the background color of the page with a smooth transition
        document.body.style.transition = 'background-color 0.5s ease';
        document.body.style.background = `linear-gradient(135deg, ${randomColor}, #a3a3ff)`; // Gradients for added style

        // Display the color code below the button
        colorCode.textContent = randomColor;

        // Change the button text after it is clicked
        button.textContent = 'Color Changed!';

        // Change text color to ensure readability depending on the background color
        if (isLightColor(randomColor)) {
            colorCode.style.color = 'black'; // Dark text on light background
            button.style.color = 'black'; // Dark button text
        } else {
            colorCode.style.color = 'white'; // Light text on dark background
            button.style.color = 'white'; // Light button text
        }

        // Reset the button text after 2 seconds
        setTimeout(() => {
            button.textContent = 'Change Color';
        }, 2000);
    });
});
