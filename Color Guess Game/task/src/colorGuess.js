let listOfColors = [];
let randomIndex;
const colorBlocks = document.querySelectorAll('.color-block');

function generateColor() {
    // Reset the color array and generate a new random index
    listOfColors = [];
    randomIndex = Math.floor(Math.random() * 6); // Generates index between 0-5

    for (let i = 0; i < 6; i++) {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);

        listOfColors.push(`rgb(${red}, ${green}, ${blue})`); // Ensure lowercase 'rgb'
    }

    // Set the RGB color to guess
    let toGuess = document.getElementById("rgb-color");
    toGuess.textContent = listOfColors[randomIndex]; // Display the correct color in the text

    // Set colors for the blocks and show them all
    colorBlocks.forEach((block, index) => {
        block.style.backgroundColor = listOfColors[index];
        block.style.display = "inline-block"; // Make sure all blocks are visible
    });

    // Reset the status message
    document.getElementById("status").textContent = "Start Guessing!";
}

function checkGuess(event) {
    const clickedBlock = event.target;

    if (isCorrectGuess(clickedBlock)) {
        document.getElementById("status").textContent = "Correct!";
        // Set all blocks to the correct color
        colorBlocks.forEach(block => {
            block.style.backgroundColor = listOfColors[randomIndex];
        });
    } else {
        document.getElementById("status").textContent = "Try Again!";
        clickedBlock.style.display = "none"; // Hide the incorrect block
    }
}

function isCorrectGuess(block) {
    return block.style.backgroundColor === listOfColors[randomIndex]; // Compare background colors
}

// Add event listeners to all color blocks
colorBlocks.forEach(block => {
    block.addEventListener("click", checkGuess);
});

// Initialize the game
generateColor();

// Add event listener to the restart button
document.getElementById("restart").addEventListener("click", generateColor);
