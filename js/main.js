import Worker from './worker.js';

const workers = [
    new Worker('Игорь', 'Фролов', 'Сергеевич', 2011, new Date(1992, 2, 21), 'Строитель'),
    new Worker('Алена', 'Белых', 'Юрьевна', 2021, new Date(1998, 5, 11), 'Юрист'),
    new Worker('Иван', 'Иванов', 'Иванович', 2001, new Date(1987, 2, 5), 'Рабочий'),
]

const $workersList = document.getElementById('workers-list')
const $workersList = $workersList.querySelectorAll('th')

function newWorkerTr(worker) {
    const $workerTR = document.createElement('tr')
    const $fioTD = document.createElement('td')
    const $birthDateTD = document.createElement('td')
    const $workStartTD = document.createElement('td')
    const $postTD = document.createElement('td')

    $fioTD.textContent = worker.fio
    $birthDateTD.textContent = worker.getBirthDateString() + ' (' + worker.getAge() + ' '+ 'лет)'
    $workStartTD.textContent = worker.workStart + ' (' + worker.getWorkPeriod() + ' '+ 'лет)'
    $postTD.textContent = worker.post

    $workerTR.append($fioTD)
    $workerTR.append($birthDateTD)
    $workerTR.append($workStartTD)
    $workerTR.append($postTD)

    return $workerTR;
}

function getSortWorkers(prop, dir) {
    const workersCopy = [...workers]
    return workersCopy.sort(function(workerA, workerB) {
        if ((!dir == false ? workerA[prop] < workerB[prop] : workerA[prop] > workerB[prop]))
            return -1;
    })
}

function render() {
    let workersCopy = [...workers]
    workersCopy = getSortWorkers('fio', true)
    for (const worker of workersCopy) {
        $workersList.append(newWorkerTr(worker));
    }
}

$workersListTHAll.forEach(element => {
    element.addEventListener('click', function() {
        const column = this.dataset.column;
    })
})

render();