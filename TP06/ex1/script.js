const myBody = document.body;
var condition = false;
function randomColors(){
    const nbr = '0123456789ABCDEF';
    let clr = '#';
    for(let e=0; e<6; e++){
        clr += nbr[Math.floor(Math.random() * 16)];
    }
    return clr;
}
var color = randomColors();
console.log(color);
function chBackcolor(color) {
    condition = true;
    if (condition == true){
        color = randomColors();
        document.body.style.backgroundColor = color;
    }
 }

 myBody.addEventListener('click', chBackcolor, false);