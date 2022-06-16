"use strict"

const historicInput = document.querySelector('.historic__input');

const resultOutput = document.querySelector('.result');
const resultYear = document.querySelector('.result__year');
const resultName = document.querySelector('.result__name');
const resultDescription = document.querySelector('.result__description');

const historicalEvents = [
    { year: 2020, date: '11.01.2020', name: 'Началось...', description: 'Началось распространение COVID-19' },
    { year: 2021, date: '15.01.2021', name: 'С днюхой, Легенда!', description: 'Википедии исполнилось 20 лет;' },
    { year: 2021, date: '24.06.2021', name: 'Новая Винда', description: 'Компания «Microsoft» представила «Windows 11»' },
    { year: 2022, date: '18.01.2022', name: 'Blizzard куплен!', description: 'Компания Microsoft объявляет о своём намерении приобрести Activision Blizzard за 68,7 млрд $. Сделка стала крупнейшим на тот момент приобретением компании' },
    { year: 2022, date: '05.04.2022', name: 'Выход Unreal Engine 5', description: '13 мая 2020 года Epic Games официально анонсировали Unreal Engine 5 и продемонстрировали демо, в разрешении QuadHD с частотой кадров 30 FPS на консоли PlayStation 5. В демо была показана работа новых технологий: Lumen и Nanite. Lumen — новая технология динамического глобального освещения. Nanite — одна из ключевых технологий в основе движка Unreal Engine 5. Она позволяет показывать в кадре столько геометрии, сколько видит глаз, и зависит от разрешения — чем оно больше, тем выше становится детализация. Выход обновлённой версии движка запланирован на начало 2022 года. Компания «Epic Games» 5 апреля 2022 года открыла доступ к игровому движку «Unreal Engine 5» для всех разработчиков' },
    { year: 2022, date: '15.06.2022', name: 'Легенда больше не поддерживается', description: 'Прекращение поддержки Internet Explorer' },
]


function whatsHappenYear(year) {
    for (let k of historicalEvents) {
        if (k.year == year) {
            resultOutput.innerHTML += `
            <div class="result__output">
                <div class="result__year">${k.date}</div>
                <div class="result__name">${k.name}</div>
                <div class="result__description">${k.description}</div>
            </div>`
        }
    }
}

historicInput.addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
        //FUNCTION
        resultOutput.innerHTML = ''
        const year = historicInput.value;
        whatsHappenYear(year)
    }
})