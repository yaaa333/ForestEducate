var fontAwesomeScript = document.createElement("script");
fontAwesomeScript.src = "https://kit.fontawesome.com/33af4a72be.js";
fontAwesomeScript.crossOrigin = "anonymous";
document.head.appendChild(fontAwesomeScript);




//$(document).ready(function(){ //因為ready是事件所以後面有function
//    $('.fa-star').click(function(){
//      $(this).css('color', 'red');
//    })
//})
 




function showLarge(e) {

    document.getElementById("large").src = e.target.src;
}

function init() {

    let smalls = document.querySelectorAll("#smallPanel img");
    for (let i = 0; i < smalls.length; i++) {
        smalls[i].onclick = showLarge;
    }
}



var selectedStar = 0; // 记录当前点击的星星数量

function rateStar(num) {
    selectedStar = num; // 更新当前点击的星星数量
    var stars = document.querySelectorAll('.fa-star');
    for (var i = 0; i < stars.length; i++) {
        if (i < num) {
            stars[i].style.color = '#ffaa00'; // 将当前及之前的星星变成蓝色
        } else {
            stars[i].style.color = 'gray'; // 将剩余的星星变回灰色
        }
    }
}

function highlightStar(num) {
    if (selectedStar === 0) { // 只有在没有点击过星星时才会变色
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







window.addEventListener("load", init, false);