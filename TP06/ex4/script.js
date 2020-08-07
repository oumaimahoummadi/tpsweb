function changeHeure(){
    var myDate = new Date();
    var scnd = myDate.getSeconds();
    var min = myDate.getMinutes();
    var hrs = myDate.getHours();
    scnd = addZero(scnd);
    min = addZero(min);
    hrs = addZero(hrs);
    document.querySelector(".conteneur").innerHTML = hrs+' : '+min+' : '+scnd;
    //document.write(hrs+' : '+min+' : '+scnd);
    setTimeout(function(){
        changeHeure();
    }, 100);
}
function addZero(e){
    if(e <= 9){
        e = "0"+e;
    }
    return e;
}
changeHeure()