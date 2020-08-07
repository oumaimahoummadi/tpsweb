function Member(name, id, grade){
    this.Name = name;
    this.Id = id;
    this.Grade = grade;
    this.toString = function(){
        return 'Id : '+this.Id+'  Name : '+this.Name+'  Grade : '+this.Grade+'\n';
    }
}

function Team(){
    this.TM = new Array();
    this.add = function(Member){
        var indice = this.TM.length;
        this.TM[indice] = Member;
    }
}

const isTeam = new Team();
isTeam.add(new Member('OUMAIMA', 09, 'O'));
isTeam.add(new Member('SOUAD', 10, 'R'));
isTeam.add(new Member('KAMAL', 12, 'T'));
isTeam.add(new Member('MEHDI', 11, 'B'));
isTeam.add(new Member('ZINEB', 14, 'E'));
isTeam.add(new Member('SOLAYMAN', 09, 'C'));
isTeam.add(new Member('MOHAMMED', 07, 'N'));
console.log(isTeam);
for(let e=0; e<isTeam.TM.length; e++){
    console.log(isTeam.TM[e].toString());

}
