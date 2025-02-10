// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        playSound('yes-sound.mp3'); // Play "Yes" sound
        playMusic(); // Play background music
        launchConfetti(); // Launch confetti
        flashRainbowColors(function () {
            document.getElementById('question').style.display = 'none'; // Hide the question
            addWallPicture(); // Add the "picture on the wall"
            displayCatHeart(); // Display the cat-heart.gif
            spawnHeartExplosion(); // Heart explosion
            displayMessage(); // Show personalized message
        });
    } else if (option === 'no') {
        playSound('no-sound.mp3'); // Play "No" sound
        document.getElementById('no-button').innerText = 'You sure?';
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

// Function to play the background music
function playMusic() {
    var music = document.getElementById('background-music');
    music.play().catch(function (error) {
        console.error("Music playback blocked by browser:", error);
    });
}

// Function to play sound effects
function playSound(effect) {
    var audio = new Audio(effect);
    audio.play();
}

// Function to launch confetti
function launchConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
}

// Flash rainbow colors function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function () {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function () {
        clearInterval(interval);
        document.body.style.backgroundColor = '#FADADD'; // Turn the background pink
        if (callback) {
            callback();
        }
    }, 2000);
}

// Function to add a "picture on the wall" behind the cat-heart.gif
function addWallPicture() {
    const imageContainer = document.getElementById('image-container');
    const wallPicture = new Image();
    wallPicture.src = 'bgphoto.png'; // Your 20x20 pixel picture
    wallPicture.alt = 'Wall Picture';
    wallPicture.id = 'wall-picture'; // Assign an ID for styling
    imageContainer.appendChild(wallPicture); // Add it behind the cat-heart.gif
}

// Function to display a personalized message
function displayMessage() {
    var message = document.createElement('div');
    message.id = 'valentine-message';
    message.innerHTML = '👁️💖🫵, Daniela'; // Adjusted message
    document.body.appendChild(message);
}

// Function to display the cat.gif initially
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.onload = function () {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = ''; // Clear the container first
    const imageContainer = document.getElementById('image-container');
    const catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.id = 'cat-heart'; // Add an ID for styling
    imageContainer.appendChild(catHeartImage);
    document.getElementById('options').style.display = 'none'; // Hide the buttons
}

// Display the cat.gif initially
displayCat();
