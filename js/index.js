

const eggsk = document.querySelectorAll('.egg img');

eggsk.forEach(eggsk => {
    eggsk.addEventListener('mouseover', () => {
        eggsk.classList.add('shake');
    });

    eggsk.addEventListener('mouseout', () => {
        eggsk.classList.remove('shake');
    });
});
