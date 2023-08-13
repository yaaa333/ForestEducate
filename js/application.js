var fontAwesomeScript = document.createElement("script");
fontAwesomeScript.src = "https://kit.fontawesome.com/33af4a72be.js";
fontAwesomeScript.crossOrigin = "anonymous";
document.head.appendChild(fontAwesomeScript);


//大小圖點擊輪播
function showLarge(e) {

    document.getElementById("large").src = e.target.src;
}

function init() {

    let smalls = document.querySelectorAll("#smallPanel img");
    for (let i = 0; i < smalls.length; i++) {
        smalls[i].onclick = showLarge;
    }
}



var selectedStar = 0; // 點擊的星星数量

function rateStar(num) {
    selectedStar = num; // 更新點擊的星星数量
    var stars = document.querySelectorAll('.fa-star');
    for (var i = 0; i < stars.length; i++) {
        if (i < num) {
            stars[i].style.color = '#ffaa00'; //將當前跟之前的星星變黃
        } else {
            stars[i].style.color = 'gray'; // 剩下的星星變回灰色
        }
    }
}

function highlightStar(num) {
    if (selectedStar === 0) { // 只有在沒有點擊星星時才會變色
        var stars = document.querySelectorAll('.fa-star');
        for (var i = 0; i < stars.length; i++) {
            if (i < num) {
                stars[i].style.color = '#ffaa00'; // 将当前及之前的星星变成蓝色
            }
        }
    }
}

function resetStars() {
    if (selectedStar === 0) { // 只有在没有点击过星星时才会变色
        var stars = document.querySelectorAll('.fa-star');
        for (var i = 0; i < stars.length; i++) {
            stars[i].style.color = 'gray'; // 将所有星星恢复成灰色
        }
    }
}




//輪播

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].style.display = 'none';
    currentSlide = index % slides.length;
    slides[currentSlide].style.display = 'block';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}
showSlide(0);
setInterval(nextSlide, 3000); 


//鳥飛
$(document).ready(function () {
    $(".birdfly").click(function () {
        $(this).hide();
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

//按鈕閃爍
const discountButton = document.getElementById('discountButton');
discountButton.classList.add('blinking');         

//字消失
const textarea = document.getElementById('pword');

textarea.addEventListener('focus', () => {
    textarea.removeAttribute('placeholder');
});

textarea.addEventListener('blur', () => {
    if (!textarea.value) {
        textarea.setAttribute('placeholder', '分享您的心得，讓更多人知道!');
    }
});



window.addEventListener("load", init, false);