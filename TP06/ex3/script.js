const B1 = document.querySelector('.b1');
const B2 = document.querySelector('.b2');
const B3 = document.querySelector('.b3');
const B4 = document.querySelector('.b4');
function init(){
    B1.addEventListener('click', function(){
        alert("Boit 1");event.cancelBubble=true;
    });
    B2.addEventListener('click', function(){
        alert("Boit 2");event.cancelBubble=true;
    });
    B3.addEventListener('click', function(){
        alert("Boit 3");event.cancelBubble=true;
    });
    B4.addEventListener('click', function(){
        alert("Boit 4");event.cancelBubble=true;
    });

}
init();