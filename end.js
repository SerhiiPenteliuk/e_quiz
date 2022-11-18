const mostRecentScore = localStorage.getItem('mostRecentScore');
let yourResult = document.getElementById('yourResult');
let resultLink = document.getElementById('resultLink');


if (mostRecentScore >= 0 && mostRecentScore <= 3) {
    yourResult.innerText = 'На жаль, Ти справжній бек'
} else if (mostRecentScore >= 4 && mostRecentScore <=6) {
    yourResult.innerText = 'Да ти фулстек!'
} else {
    yourResult.innerText = 'Вітаю, Ти фронт!'
}
