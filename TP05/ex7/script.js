var t = [4, 1, -5];
function adddition(x){
    return x+2;
}
function soustraction(x){
    if(x >= 0){
        return x-2;
    }else{
        alert("!! Nombre négatif !!");
    }
}
function affiche(){
    alert(adddition(t[0]));
    alert(adddition(t[2]));
    alert(soustraction(t[0]));
    alert(soustraction(t[2]));
}
affiche()