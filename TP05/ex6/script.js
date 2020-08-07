var a = 3;
var b = 2;
function multiplie(x = 8){
    return x*3;
}
function affiche(){
    alert("multiplie(a) = "+multiplie(a));
    alert("multiplie(b) = "+multiplie(a));
    alert("multiplie() = "+multiplie());
}
affiche()