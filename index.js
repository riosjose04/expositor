function filtrarDeuteronomio(evento) {
    event.preventDefault();
    const lessons = document.querySelectorAll('.juan, .job, .proverbios, .eclesiastes, .cantares');
    lessons.forEach(element => {
        element.classList.add('hidden');
    });
    const ownLessons = document.querySelectorAll('.deuteronomio');
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
}
function filtrarJuan(evento) {
    event.preventDefault();
    const lessons = document.querySelectorAll('.deuteronomio, .job, .proverbios, .eclesiastes, .cantares');
    lessons.forEach(element => {
        element.classList.add('hidden');
    });
    const ownLessons = document.querySelectorAll('.juan');
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
}
function filtrarJob(evento) {
    event.preventDefault();
    const lessons = document.querySelectorAll('.deuteronomio, .juan, .proverbios, .eclesiastes, .cantares');
    lessons.forEach(element => {
        element.classList.add('hidden');
    });
    const ownLessons = document.querySelectorAll('.job');
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
}
function filtrarProverbios(evento) {
    event.preventDefault();
    const lessons = document.querySelectorAll('.deuteronomio, .juan, .job, .eclesiastes, .cantares');
    lessons.forEach(element => {
        element.classList.add('hidden');
    });
    const ownLessons = document.querySelectorAll('.proverbios');
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
}
function filtrarEclesiastes(evento) {
    event.preventDefault();
    const lessons = document.querySelectorAll('.deuteronomio, .juan, .job, .proverbios, .cantares');
    lessons.forEach(element => {
        element.classList.add('hidden');
    });
    const ownLessons = document.querySelectorAll('.eclesiastes');
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
}
function filtrarCantares(evento) {
    event.preventDefault();
    const lessons = document.querySelectorAll('.deuteronomio, .juan, .job, .proverbios, .eclesiastes');
    lessons.forEach(element => {
        element.classList.add('hidden');
    });
    const ownLessons = document.querySelectorAll('.cantares');
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
}
function showAll(evento) {
    event.preventDefault();
    const lessons = document.querySelectorAll('.hidden');
    lessons.forEach(element => {
        element.classList.remove('hidden');
    });
    document.getElementById('book-seven').classList.add('book-seven-selected');
    document.getElementById('book-one').classList.remove('book-one-selected');
    document.getElementById('book-two').classList.remove('book-two-selected');
    document.getElementById('book-three').classList.remove('book-three-selected');
    document.getElementById('book-four').classList.remove('book-four-selected');
    document.getElementById('book-five').classList.remove('book-five-selected');
    document.getElementById('book-six').classList.remove('book-six-selected');
}
