let scoreA = document.getElementById("team1-score");
let scoreB = document.getElementById("team2-score");

let numScoreA = parseInt(scoreA.textContent) || 0; // Convert to number or default to 0
let numScoreB = parseInt(scoreB.textContent) || 0;

function updateScore(teamName, changeInScore) {
    if (teamName === "team1") {
        numScoreA += changeInScore;
        scoreA.textContent = numScoreA;
    } else if (teamName === "team2") {
        numScoreB += changeInScore;
        scoreB.textContent = numScoreB;
    }
}

function resetScores(){
    scoreA.textContent = numScoreA = 0
    scoreB.textContent = numScoreB = 0
}