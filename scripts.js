const answers = ["convocation hall", "gate 2", "mithaas", "library", "basketball court", "lake side", "computer centre", "multi use convention hall",  "community hall", "pine breeze", "quick bites"];

const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg"];

const superlatives = [
    'good', 'intelligent', 'brilliant', 'genius', 'clever',
    'sharp', 'bright', 'savvy', 'smart', 'brainy', 'almost there'];


let currentImageIndex = 0;
let wrongAttempts = 0;
let playerName = '';

function showRules() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('rules-screen').style.display = 'block';
}

function startGame() {
    playerName = document.getElementById('name').value.trim();
    if (playerName === '') {
        alert('Please enter your name.');
        return;
    }

    document.getElementById('username').textContent = playerName;
    document.getElementById('superlative').textContent = `You are ${superlatives[currentImageIndex]}`;
    document.getElementById('game-image').src = images[currentImageIndex];
    document.getElementById('rules-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';

    // Add event listener for Enter key on answer input
    document.getElementById('answer').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    });
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase().replace(/\s+/g, '');
    const correctAnswer = answers[currentImageIndex].toLowerCase().replace(/\s+/g, '');

    if (userAnswer === correctAnswer) {
        document.getElementById('message').textContent = 'Correct answer, moving to next level...';
        setTimeout(() => {
            currentImageIndex++;
            wrongAttempts = 0;

            if (currentImageIndex < images.length) {
                document.getElementById('game-image').src = images[currentImageIndex];
                document.getElementById('superlative').textContent = `You are ${superlatives[currentImageIndex]}`;
                document.getElementById('answer').value = '';
                document.getElementById('message').textContent = '';
            } else {
                document.getElementById('game-screen').style.display = 'none';
                document.getElementById('end-screen').style.display = 'block';
                document.getElementById('end-image').src = '12.jpg'; // Add your congratulations image here
            }
        }, 2000);
    } else {
        wrongAttempts++;
        if (wrongAttempts >= 3) {
            document.getElementById('message').textContent = 'WRONG! Enter full name with correct space';
        } else {
            document.getElementById('message').textContent = 'Incorrect answer. Try again.';
        }
    }
}

// Add event listener for Enter key on name input
document.getElementById('name').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        showRules();
    }
});
