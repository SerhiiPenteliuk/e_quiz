const mostRecentScore = localStorage.getItem('mostRecentScore');
let yourResult = document.getElementById('yourResult');
let hru = document.getElementById('hru')
let resultLink = document.getElementById('resultLink');

if (mostRecentScore >= 0 && mostRecentScore <= 3) {
    //текст заголовку
    yourResult.innerText = 'Ти справжній Back-end Developer!'
    //текст посилання
    resultLink.innerText = 'Реєструйся та спробуй свої сили на нашому курсі Magento BE Dev'
    //лінк
    resultLink.setAttribute(
        'action', 'https://forms.gle/zPT7H7b9DAjYH7yv6'
    )
    hru.setAttribute('href','https://forms.gle/zPT7H7b9DAjYH7yv6')
} else if (mostRecentScore >= 4 && mostRecentScore <= 6) {
    yourResult.innerText = 'Да ти справжній FullStack Developer!'
    resultLink.innerText = 'Реєструйся та спробуй свої сили на нашому курсі Sales Force Commerce cloud'
    resultLink.setAttribute('href', 'https://forms.gle/rNjQtW9zq8K2XdGT6')
    hru.setAttribute('href','https://forms.gle/zPT7H7b9DAjYH7yv6')
} else {
    yourResult.innerText = 'Вітаю, Ти Front-End Developer!'
    resultLink.innerText = 'Реєструйся та спробуй свої сили на нашому курсі Magento FE Dev'
    resultLink.setAttribute('href', 'https://forms.gle/7TvN7cZcUYx4jLDM7');
    hru.setAttribute('href','https://forms.gle/zPT7H7b9DAjYH7yv6')
}
