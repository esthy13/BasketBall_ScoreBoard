let homeScore = document.getElementsByClassName("score")[0];
let guestScore = document.getElementsByClassName("score")[1];

// Arrays to keep track of score history
let homeScoreHistory = [0];
let guestScoreHistory = [0];

function addHome(points) {
    // Update score and history
    let newScore = parseInt(homeScore.innerText) + points;
    homeScore.innerText = newScore;
    homeScoreHistory.push(newScore);
}

function addGuest(points) {
    // Update score and history
    let newScore = parseInt(guestScore.innerText) + points;
    guestScore.innerText = newScore;
    guestScoreHistory.push(newScore);
}

function reset() {
    // Reset scores and history
    homeScore.innerText = 0;
    guestScore.innerText = 0;
    homeScoreHistory = [0];
    guestScoreHistory = [0];
}

function undoHome() {
    // Check if there is history to undo
    if (homeScoreHistory.length > 1) {
        homeScoreHistory.pop(); // Remove last entry
        homeScore.innerText = homeScoreHistory[homeScoreHistory.length - 1]; // Set to previous score
    }
}
function undoGuest() {
    if (guestScoreHistory.length > 1) {
        guestScoreHistory.pop(); // Remove last entry
        guestScore.innerText = guestScoreHistory[guestScoreHistory.length - 1]; // Set to previous score
    }
}