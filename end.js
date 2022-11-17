const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
let yourResult = document.getElementById('yourResult');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

if (mostRecentScore >= 0 && mostRecentScore <= 3) {
    yourResult.innerText = 'Ти справжній бек'
} else if (mostRecentScore >= 4 && mostRecentScore <=6) {
    yourResult.innerText = 'Да ти фулстек!'
} else {
    yourResult.innerText = 'Вітаю, ти фронт!'
}

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
};
