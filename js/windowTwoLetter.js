//----------------------- BLOCK 2 -----------------------
const formcontrol2 = document.getElementById('formcontrol2')
const firstlttr2 = document.getElementById('firstlttr2')
const secondlttr2 = document.getElementById('secondlttr2')
const thirdlttr2 = document.getElementById('thirdlttr2')
const fourthlttr2 = document.getElementById('fourthlttr2')
const fifthlttr2 = document.getElementById('fifthlttr2')
const sixthlttr2 = document.getElementById('sixthlttr2')
const seventhlttr2 = document.getElementById('seventhlttr2')

const inputprompt2 = document.getElementById('inputprompt2')
const btnprompt2 = document.getElementById('btnprompt2')
const prompts2 = document.getElementById('prompts2') 

const winner2 = document.getElementById('winner2')
const verify2 = document.getElementById('verify2')

verify2.onclick = function () {
    const answer2 = ['k', 'o', 'b', 'e', 'r', 'e', 'c'];
    const inputs2 = [firstlttr2, secondlttr2, thirdlttr2, fourthlttr2, fifthlttr2, sixthlttr2, seventhlttr2];

    inputs2.forEach((input, index) => {
        if (input.value !== '') {
            input.value.toLowerCase() === answer2[index]
            ? input.style.background = 'green'
            : input.style.background = 'red';
        }
    });

    const allWord2 = inputs2.map(input => input.value.toLowerCase()).join('');

    if (allWord2 === answer2.join('')) {
        document.body.innerHTML = '';

        document.body.style.backgroundImage = "url('/img/final.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center 20%";
        document.body.style.backgroundRepeat = "no-repeat";

        winner2.innerHTML = `
            <h1>Умница :) Скоро отдам тебе подарочек твой. Он будет с доп презентом)</h1>
            <div class="d-flex justify-content-center mt-2">
                <button class="meow">Тык</button>
            </div>
            `;

        winner2.style.color = 'white';
        winner2.style.textAlign = 'center';
        winner2.style.marginTop = '30vh';
        winner2.style.fontSize = '2rem';

        document.body.appendChild(winner2);

        const meowButton = document.querySelector('.meow')

        meowButton.onclick = function() {
            const heart = document.createElement('div');
            heart.textContent = '❤️';
            
            //добавление класса heart к элементу heart
            heart.classList.add('heart'); 

            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 3000);
        };

    }
};

btnprompt2.onclick = function(){
    const value = inputprompt2.value.trim();

    switch (value) {
        case '1':
            prompts2.innerHTML = '50.08662, 14.41606';
            break;
        case '2':
            prompts2.innerHTML = 'Можешь зайти на сайт с палитрами цветов ну или я напишу ответ. Orange';
            break;
        case '3':
            prompts2.innerHTML = 'От буквы E отнять 3, то есть по счету букв. A B C D E. Е по счету 5, если отнять 3, то получается 2 по счету - B.';
            break;
        case '4':
            prompts2.innerHTML = 'nEw Balance 530';
            break;
        case '5':
            prompts2.innerHTML = 'Тут тебе и не надо подсказка, но все же оставлю. ДО РЕ МИ ФА СОЛЬ ЛЯ СИ';
            break;
        case '6':
            prompts2.innerHTML = 'Зачастую такое ты встречала в книге по английскому, когда надо составить слово из букв, которые есть у тебя. (Орел)';
            break;
        case '7':
            prompts2.innerHTML = 'Тут я думаю ты справишься, 360 - круг(circle)';
            break;
        default:
            prompts2.innerHTML = 'Такой подсказки нет';
    }
}
