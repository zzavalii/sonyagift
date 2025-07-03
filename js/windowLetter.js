//----------------------- BLOCK 1 -----------------------
const formcontrol = document.getElementById('formcontrol')
const firstlttr = document.getElementById('firstlttr')
const secondlttr = document.getElementById('secondlttr')
const thirdlttr = document.getElementById('thirdlttr')
const fourthlttr = document.getElementById('fourthlttr')
const fifthlttr = document.getElementById('fifthlttr')

const inputprompt = document.getElementById('inputprompt')
const btnprompt = document.getElementById('btnprompt')
const prompts = document.getElementById('prompts') 

const winner = document.getElementById('winner')
const winnerblock = document.getElementById('winnerblock')

const verify = document.getElementById('verify')

const hide = document.getElementById('hide')
const hide1 = document.getElementById('hide1')
const hide2 = document.getElementById('hide2')
const listFirst = document.getElementById('listFirst')

winnerblock.style.display = 'none'

verify.onclick = function () {
    const answer = ['s', 'p', 'o', 'r', 't'];
    const inputs = [firstlttr, secondlttr, thirdlttr, fourthlttr, fifthlttr];

    inputs.forEach((input, index) => {
        if (input.value !== '') {
            input.value.toLowerCase() === answer[index]
            ? input.style.background = 'green'
            : input.style.background = 'red';
        }
    });

    const allWord = inputs.map(input => input.value.toLowerCase()).join('');

    if (allWord === answer.join('')){

        formcontrol.style.display = 'none'
        verify.style.display = 'none'
        hide.style.display = 'none'
        hide1.style.display = 'none'
        hide2.style.display = 'none'
        listFirst.style.display = 'none'

        inputprompt.style.display = 'none'
        btnprompt.style.display = 'none'
        prompts.style.display = 'none'

        winnerblock.style.display = 'flex'

        winner.innerHTML = `
        <p>Умничка моя, ты угадала, теперь следующий этап. Надо угадать что именно за предмет.</p>
        <button class="btn btn-primary mt-2" onclick="location.href='/windowTwoLetter.html'">Далее</button>`;

        document.body.style.backgroundImage = "url('/img/2cat.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center 50%";
        document.body.style.backgroundRepeat = "no-repeat"; 
        
    } else {
        winner.innerHTML = ' '
    }
};

btnprompt.onclick = function(){
    const value = inputprompt.value.trim();

    switch (value) {
        case '1':
            prompts.innerHTML = 'Связано с моим любимым фильмом. Этот трек в честь погибшего героя с фильма. Но погиб он не в фильме а в дтп.';
            break;
        case '2':
            prompts.innerHTML = 'Тебе надо решить все блоки и связать цифры или числа которые получились. Места куда вставлять подсвечиваются.';
            break;
        case '3':
            prompts.innerHTML = 'Посмотри внимательно на слово, какая буква выделена?';
            break;
        case '4':
            prompts.innerHTML = 'Подушечка с енотиком';
            break;
        case '5':
            prompts.innerHTML = 'Ты говорила что этот спорт тебе очень сильно нравится. Ты бы хотела со мной заниматься или поиграть сейчас.А какую букву я думаю ты поймешь)';
            break;
        default:
            prompts.innerHTML = 'Такой подсказки нет';
    }
}
