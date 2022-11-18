const mostRecentScore = localStorage.getItem('mostRecentScore');
let yourResult = document.getElementById('yourResult');
let resultLink = document.getElementById('resultLink');

if (mostRecentScore >= 0 && mostRecentScore <= 3) {
    //текст заголовку
    yourResult.innerText = 'На жаль, Ти справжній бек'
    //текст посилання
    resultLink.innerText = 'Тримай лінку для бека'
    //лінк
    resultLink.setAttribute(
        'href', 'https://github.com/SerhiiPenteliuk/e_quiz/tree/main'
    )
} else if (mostRecentScore >= 4 && mostRecentScore <= 6) {
    yourResult.innerText = 'Да ти фулстек!'
    resultLink.innerText = 'Тримай лінку для'
    resultLink.setAttribute('href', '#')
} else {
    yourResult.innerText = 'Вітаю, Ти фронт!'
    resultLink.innerText = 'Тримай лінку для'
    resultLink.setAttribute('href', '#');
}
