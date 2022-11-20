const mostRecentScore = localStorage.getItem('mostRecentScore');
let yourResult = document.getElementById('yourResult');
let hru = document.getElementById('hru')
let addInfo = document.getElementById('add-info');

if (mostRecentScore >= 0 && mostRecentScore <= 3) {
    //текст заголовку
    yourResult.innerText = 'Ти справжній Back-end Developer!'
    //текст посилання
    addInfo.innerText = 'Реєструйся та спробуй свої сили на нашому курсі Magento BE Dev'
    hru.setAttribute('href','https://forms.gle/zPT7H7b9DAjYH7yv6')
} else if (mostRecentScore >= 4 && mostRecentScore <= 6) {
    yourResult.innerText = 'Да ти справжній FullStack Developer!'
    addInfo.innerText = 'Реєструйся та спробуй свої сили на нашому курсі Sales Force Commerce Cloud'
    hru.setAttribute('href','https://forms.gle/zPT7H7b9DAjYH7yv6')
} else {
    yourResult.innerText = 'Вітаю, Ти Front-End Developer!'
    addInfo.innerText = 'Реєструйся та спробуй свої сили на нашому курсі Magento FE Dev'
    hru.setAttribute('href','https://forms.gle/zPT7H7b9DAjYH7yv6')
}
