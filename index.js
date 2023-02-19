function filtrarEfesios(evento) {
    event.preventDefault();
    const lessons = document.querySelectorAll('.filipenses, .habacuc, .jeremias, .lamentaciones, .marcos, .ezequiel, .daniel');
    lessons.forEach(element => {
        element.classList.add('hidden');
    });
    const ownLessons = document.querySelectorAll('.efesios');
    ownLessons.forEach(element => {
        element.classList.remove('hidden');
    });
    document.getElementById('book-one').classList.add('book-one-selected');
    document.getElementById('book-two').classList.remove('book-two-selected');
    document.getElementById('book-three').classList.remove('book-three-selected');
    document.getElementById('book-four').classList.remove('book-four-selected');
    document.getElementById('book-five').classList.remove('book-five-selected');
    document.getElementById('book-six').classList.remove('book-six-selected');
    document.getElementById('book-seven').classList.remove('book-seven-selected');
    document.getElementById('book-eight').classList.remove('book-eight-selected');
    document.getElementById('book-nine').classList.remove('book-nine-selected');
}

function filtrarFilipenses(evento) {
    event.preventDefault();
    const lessons = document.querySelectorAll('.efesios, .habacuc, .jeremias, .lamentaciones, .marcos, .ezequiel, .daniel');
    lessons.forEach(element => {
        element.classList.add('hidden');
    });
    const ownLessons = document.querySelectorAll('.filipenses');
    ownLessons.forEach(element => {
        element.classList.remove('hidden');
    });
    document.getElementById('book-two').classList.add('book-two-selected');
    document.getElementById('book-one').classList.remove('book-one-selected');
    document.getElementById('book-three').classList.remove('book-three-selected');
    document.getElementById('book-four').classList.remove('book-four-selected');
    document.getElementById('book-five').classList.remove('book-five-selected');
    document.getElementById('book-six').classList.remove('book-six-selected');
    document.getElementById('book-seven').classList.remove('book-seven-selected');
    document.getElementById('book-eight').classList.remove('book-eight-selected');
    document.getElementById('book-nine').classList.remove('book-nine-selected');
}
function filtrarHabacuc(evento) {
    event.preventDefault();
    const lessons = document.querySelectorAll('.efesios, .filipenses, .jeremias, .lamentaciones, .marcos, .ezequiel, .daniel');
    lessons.forEach(element => {
        element.classList.add('hidden');
    });
    const ownLessons = document.querySelectorAll('.habacuc');
    ownLessons.forEach(element => {
        element.classList.remove('hidden');
    });
    document.getElementById('book-three').classList.add('book-three-selected');
    document.getElementById('book-one').classList.remove('book-one-selected');
    document.getElementById('book-two').classList.remove('book-two-selected');
    document.getElementById('book-four').classList.remove('book-four-selected');
    document.getElementById('book-five').classList.remove('book-five-selected');
    document.getElementById('book-six').classList.remove('book-six-selected');
    document.getElementById('book-seven').classList.remove('book-seven-selected');
    document.getElementById('book-eight').classList.remove('book-eight-selected');
    document.getElementById('book-nine').classList.remove('book-nine-selected');
}
function filtrarJeremias(evento) {
    event.preventDefault();
    const lessons = document.querySelectorAll('.efesios, .filipenses, .habacuc, .lamentaciones, .marcos, .ezequiel, .daniel');
    lessons.forEach(element => {
        element.classList.add('hidden');
    });
    const ownLessons = document.querySelectorAll('.jeremias');
    ownLessons.forEach(element => {
        element.classList.remove('hidden');
    });
    document.getElementById('book-four').classList.add('book-four-selected');
    document.getElementById('book-one').classList.remove('book-one-selected');
    document.getElementById('book-two').classList.remove('book-two-selected');
    document.getElementById('book-three').classList.remove('book-three-selected');
    document.getElementById('book-five').classList.remove('book-five-selected');
    document.getElementById('book-six').classList.remove('book-six-selected');
    document.getElementById('book-seven').classList.remove('book-seven-selected');
    document.getElementById('book-eight').classList.remove('book-eight-selected');
    document.getElementById('book-nine').classList.remove('book-nine-selected');
}
function filtrarLamentaciones(evento) {
    event.preventDefault();
    const lessons = document.querySelectorAll('.efesios, .filipenses, .habacuc, .jeremias, .marcos, .ezequiel, .daniel');
    lessons.forEach(element => {
        element.classList.add('hidden');
    });
    const ownLessons = document.querySelectorAll('.lamentaciones');
    ownLessons.forEach(element => {
        element.classList.remove('hidden');
    });
    document.getElementById('book-five').classList.add('book-five-selected');
    document.getElementById('book-one').classList.remove('book-one-selected');
    document.getElementById('book-two').classList.remove('book-two-selected');
    document.getElementById('book-three').classList.remove('book-three-selected');
    document.getElementById('book-four').classList.remove('book-four-selected');
    document.getElementById('book-six').classList.remove('book-six-selected');
    document.getElementById('book-seven').classList.remove('book-seven-selected');
    document.getElementById('book-eight').classList.remove('book-eight-selected');
    document.getElementById('book-nine').classList.remove('book-nine-selected');
}
function filtrarMarcos(evento) {
    event.preventDefault();
    const lessons = document.querySelectorAll('.efesios, .filipenses, .habacuc, .jeremias, .lamentaciones, .ezequiel, .daniel');
    lessons.forEach(element => {
        element.classList.add('hidden');
    });
    const ownLessons = document.querySelectorAll('.marcos');
    ownLessons.forEach(element => {
        element.classList.remove('hidden');
    });
    document.getElementById('book-six').classList.add('book-six-selected');
    document.getElementById('book-one').classList.remove('book-one-selected');
    document.getElementById('book-two').classList.remove('book-two-selected');
    document.getElementById('book-three').classList.remove('book-three-selected');
    document.getElementById('book-four').classList.remove('book-four-selected');
    document.getElementById('book-five').classList.remove('book-five-selected');
    document.getElementById('book-seven').classList.remove('book-seven-selected');
    document.getElementById('book-eight').classList.remove('book-eight-selected');
    document.getElementById('book-nine').classList.remove('book-nine-selected');
}
function filtrarEzequiel(evento) {
    event.preventDefault();
    const lessons = document.querySelectorAll('.efesios, .filipenses, .habacuc, .jeremias, .lamentaciones, .marcos, .daniel');
    lessons.forEach(element => {
        element.classList.add('hidden');
    });
    const ownLessons = document.querySelectorAll('.ezequiel');
    ownLessons.forEach(element => {
        element.classList.remove('hidden');
    });
    document.getElementById('book-seven').classList.add('book-seven-selected');
    document.getElementById('book-one').classList.remove('book-one-selected');
    document.getElementById('book-two').classList.remove('book-two-selected');
    document.getElementById('book-three').classList.remove('book-three-selected');
    document.getElementById('book-four').classList.remove('book-four-selected');
    document.getElementById('book-five').classList.remove('book-five-selected');
    document.getElementById('book-six').classList.remove('book-six-selected');
    document.getElementById('book-eight').classList.remove('book-eight-selected');
    document.getElementById('book-nine').classList.remove('book-nine-selected');
}
function filtrarDaniel(evento) {
    event.preventDefault();
    const lessons = document.querySelectorAll('.efesios, .filipenses, .habacuc, .jeremias, .lamentaciones, .marcos, .ezequiel');
    lessons.forEach(element => {
        element.classList.add('hidden');
    });
    const ownLessons = document.querySelectorAll('.daniel');
    ownLessons.forEach(element => {
        element.classList.remove('hidden');
    });
    document.getElementById('book-eight').classList.add('book-eight-selected');
    document.getElementById('book-one').classList.remove('book-one-selected');
    document.getElementById('book-two').classList.remove('book-two-selected');
    document.getElementById('book-three').classList.remove('book-three-selected');
    document.getElementById('book-four').classList.remove('book-four-selected');
    document.getElementById('book-five').classList.remove('book-five-selected');
    document.getElementById('book-six').classList.remove('book-six-selected');
    document.getElementById('book-seven').classList.remove('book-seven-selected');
    document.getElementById('book-nine').classList.remove('book-nine-selected');
}
function showAll(evento) {
    event.preventDefault();
    const lessons = document.querySelectorAll('.hidden');
    lessons.forEach(element => {
        element.classList.remove('hidden');
    });
    document.getElementById('book-nine').classList.add('book-nine-selected');
    document.getElementById('book-one').classList.remove('book-one-selected');
    document.getElementById('book-two').classList.remove('book-two-selected');
    document.getElementById('book-three').classList.remove('book-three-selected');
    document.getElementById('book-four').classList.remove('book-four-selected');
    document.getElementById('book-five').classList.remove('book-five-selected');
    document.getElementById('book-six').classList.remove('book-six-selected');
    document.getElementById('book-seven').classList.remove('book-seven-selected');
    document.getElementById('book-eight').classList.remove('book-eight-selected');
}
/*************************************************************************** */
function searchClassByDate(){
    const lessonDate = document.getElementById('dateControl').value;
    if(lessonDate === null){
        alert('Seleccione una fecha');
    }else{
        var lessonsDates = document.querySelectorAll('.lesson-date');
        var lessonsNumbers = document.querySelectorAll('.lesson-number');
        for (let index = 0; index < lessonsNumbers.length; index++) {
            if(lessonsDates[index].innerHTML == String(lessonDate)){
                console.log(lessonsDates[index].innerHTML);
                console.log(lessonsNumbers[index].innerHTML);
                window.location.href = `/lessons/lesson${lessonsNumbers[index].innerHTML}.html`
            }
        }
    }
}