let homeScore = document.getElementsByClassName("score")[0]
let guestScore = document.getElementsByClassName("score")[1]

function addHome(points){
    homeScore.innerText = parseInt(homeScore.innerText) + points;
}
function addGuest(points){
    guestScore.innerText = parseInt(guestScore.innerText) + points;
}