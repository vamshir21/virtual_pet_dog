// Get the DOM elements
const dogImage = document.getElementById("dog");
const statusMessage = document.getElementById("status");
const hungerMeter = document.getElementById("hunger-meter");
const happinessMeter = document.getElementById("happiness-meter");

// Initial hunger and happiness values
let hunger = 50;
let happiness = 50;

// Update the dog's visual state and the status text
function updateDogState() {
    hungerMeter.value = hunger;
    happinessMeter.value = happiness;

    if (hunger >= 80) {
        dogImage.src = "./images/dog-hungry.gif";
        statusMessage.textContent = "Your dog is very hungry!";
    } else if (hunger < 20) {
        dogImage.src = "./images/dog-neutral.gif";
        statusMessage.textContent = "Your dog is not hungry.";
    } else if (happiness >= 80) {
        dogImage.src = "./images/dog-happy.gif";
        statusMessage.textContent = "Your dog is very happy!";
    } else if (happiness <= 20) {
        dogImage.src = "./images/dog-sad.gif";
        statusMessage.textContent = "Your dog is sad!";
    } else {
        dogImage.src = "./images/dog-neutral.gif";
        statusMessage.textContent = "Your dog is okay.";
    }
}

// Feed the dog
function feedDog() {
    if (hunger > 10) {
        hunger -= 10;
        happiness -= 5;
    } else {
        hunger = 0;
    }
    updateDogState();
}

// Play with the dog
function playWithDog() {
    if (happiness < 90) {
        happiness += 10;
        hunger += 5;
    } else {
        happiness = 100;
    }
    updateDogState();
}

// Automatic hunger increase and happiness decrease over time
setInterval(() => {
    hunger += 5;
    happiness -= 5;

    if (hunger >= 100) {
        statusMessage.textContent = "Your dog is too hungry! Game over!";
        dogImage.src = "dog-sad.gif";
        clearInterval(this);  // Stop game logic
    } else if (happiness <= 0) {
        statusMessage.textContent = "Your dog is too sad! Game over!";
        dogImage.src = "dog-sad.gif";
        clearInterval(this);  // Stop game logic
    }

    updateDogState();
}, 5000);  // Update every 5 seconds
