const date = document.getElementById('btn-datetime');
const numberPersons = document.getElementById('btn-number-persons');

//CONTAINERS
const containerDate = document.getElementById('container-date');
const containerPersons = document.getElementById('container-persons');

const btnclose = document.getElementById('container-date__close');
const btnClosePersons = document.getElementById('container-persons__close');

const inputDate = document.getElementById('dateInput');
const inputPersons = document.getElementById('inputNumPersons');

date.addEventListener('click', (e) => {
    e.preventDefault();

    if (containerDate.style.display === 'flex') {
        containerDate.style.display = 'none';
        inputDate.style.display = 'none';
    } else {
        containerDate.style.display = 'flex';
        inputDate.style.display = 'flex';
        inputDate.focus()
    }

});

btnclose.addEventListener('click', (e) => {
    e.preventDefault();

    if (containerDate.style.display === 'flex') {
        containerDate.style.display = 'none';
        inputDate.style.display = 'none';
    } else {
        containerDate.style.display = 'flex';
        inputDate.style.display = 'flex';
        inputDate.focus()
    }
})

numberPersons.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('persons')

    if (containerPersons.style.display === 'flex') {
        containerPersons.style.display = 'none';
        inputPersons.style.display = 'none';
    } else {
        containerPersons.style.display = 'flex';
        inputPersons.style.display = 'flex';
        inputPersons.focus()
    }
})

btnClosePersons.addEventListener('click', (e) => {
    e.preventDefault();

    if (containerPersons.style.display === 'flex') {
        containerPersons.style.display = 'none';
        inputPersons.style.display = 'none';
    } else {
        containerPersons.style.display = 'flex';
        inputPersons.style.display = 'flex';
        inputPersons.focus()
        }
})