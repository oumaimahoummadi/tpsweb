
//console.log("prm function");
//function somme(a,b){
 //   c=a+b;
  //  return c;
//}
//console.log(somme(6,8));

/*function showmsg(){
    alert("premier fonction");
}
showmsg();

var msg1="message globale"
function showmsg(){
    var msg2="message local"
    msg3="autre message"
    alert(msg1);
    alert(msg2);
    alert(msg3);
}
var m1="salut tous"
function myfun1(m){
    console.log(m,m1);
    //m1="!!!"
}
myfun1();
myfun1("hi");
console.log(m1);
console.log(m);



/////objet leteral
var e={
nom:"hoummadi";
prenom:"oumaima";
};
console.log( e);
console.log( e.nom);
console.log( e.prenom);
console.log( e.age);
e.age=25
console.log( e);
console.log( e.nom);
console.log( e.prenom);
console.log( e.age);
e.name="kim"
console.log(e);



function etudiant(nom.prenom.age){
    this.nom=nom;
    this.prenom=prenom;
    this.age=age;
    this.notes=[];
    this.ajouternote=function(note){
        this.notes.push(note);

    }
    this.calculmoyenne=function(){
        var moy=0;
        return moy;

    }
}
var e1=new etudiant("oumima","hoummadi",19);
var e2=new etudiant("kim","houm",20);
console.log("e1:",e1);
console.log("e2:",e2);
e1.ajouternote(16);
e2.ajouternote(15);
console.log("e1:",e1);
console.log("e2:",e2);
var me1=e1.calculmoyenne()
var me2=e2.calculmoyenne()
console.log("moy e1:",me1);
console.log("moy e2:",me2);
*/


var age=parseInt(prompt("donner votre age"));
if(age<1){
    alert("!!!!!!")
}
else if(age<=17){
        alert("vous n'etes pas encore majeur")
        }
      else if(age<=49){
            alert("vous etes majeur mais pas encore senior")
        }
          else if(age<=59){
             alert("vous etes senior mais pas encore retraite")
         }
             else if(age<=120){
                 alert("vous etes retraite,profiter di votre temps libre !")
                  }
                        else{
                      alert("tapper un age correct")}
                      