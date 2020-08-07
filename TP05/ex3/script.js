function somme(t){
    var s=0;
    console.log(t);
    for(i in t){
        s=s+t[i];
    }
    return s;
}
var l=new Array();
do{
    v=prompt("Donnez un nombre  :");
    v=parseInt(v);
    console.log(v);
    if(!(isNaN(v))) l.push(v);
}while(!(isNaN(v)))
somme(l);
let sum=somme(l);
console.log("la somme de tableau est ",sum);