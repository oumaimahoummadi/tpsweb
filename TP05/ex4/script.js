let n=Math.random()*100;
n=Math.floor(n);
console.log(n)
let val=false;
var x=prompt("Donnez un nomber");
x=parseInt(x);
while(val===false){
    if(x<n){
        alert("plus petite");
        x=prompt("Donnez un nbr");
    }
    else if(x>n){
        alert("plus grande");
        x=prompt("Donnez un nbr");
    }
    else{
        alert("good");
        val=true;
    }
}