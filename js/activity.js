var fontAwesomeScript = document.createElement("script");
fontAwesomeScript.src = "https://kit.fontawesome.com/33af4a72be.js";
fontAwesomeScript.crossOrigin = "anonymous";
document.head.appendChild(fontAwesomeScript);

//分類
const pickButton = document.querySelectorAll('.pick-button');
const items = document.querySelectorAll('.item');

items.forEach(item => {
item.style.display = 'flex';
});

pickButton.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        
        items.forEach(item => {
            const categories = item.getAttribute('data-categories');
            if (categories.includes(category)) {
                item.style.display = 'flex';
        } else {
            item.style.display = 'none';
            }
        });
    });
});

//樹
const eggsk = document.querySelectorAll('.treebird img');
                 
eggsk.forEach(eggsk => {
    eggsk.addEventListener('mouseover', () => {
        eggsk.classList.add('shake');
    });

    eggsk.addEventListener('mouseout', () => {
        eggsk.classList.remove('shake');
    });
});

window.addEventListener("load", init, false);
