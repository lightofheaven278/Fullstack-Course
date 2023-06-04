document.getElementById('myImage');

function init() {
   imgObj = document.getElementById('myImage');
   imgObj.style.position = 'relative';
   imgObj.style.left = '0px';
   imgObj.style.right = '0px';
}

function moveRight() {
   imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}

// function moveLeft() {
//    imgObj.style.right = 0 + 'px';
// }

window.onload = init;



