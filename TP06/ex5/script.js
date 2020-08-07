const myHrs = document.querySelector(".hrs");
const myMns = document.querySelector(".mins");
const myScds = document.querySelector(".scds");
const myMScs = document.querySelector(".mscds");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
var h = 0; var m = 0; var s = 0; var ms = 0;
var cont = 0; var ch = 0; var cm = 0; var cs = 0; var cms=0;
var macloock;
var cond = false;
function theTimer(){
    cont++;
    cms = cont;
    if(cms > 99){
        cs = cs + 1; cms = 0; cont = 0;
    }else if(cms < 10 ){
        ms = "0"+cms;
    }else{ ms = cms ;}
    if(cs > 59){
        cm = cm + 1; cs = 0;
    }else if(cs < 10){
        s = "0"+cs;
    }else{ s = cs; }
    if(cm > 59){
        ch = ch + 1; cm = 0;
    }else if(cm < 10){
        m ="0"+cm;
    }else{ m = cm}
    if(ch < 10){
        h = "0"+ch;
    }else{ h = ch}

myHrs.innerHTML = h;
myMns.innerHTML = m;
myScds.innerHTML = s;
myMScs.innerHTML = ms;

}
function start(){
    cond = true;
    if(cond == true){
        macloock = setInterval(theTimer, 10);
    }
}


// creat fnction stop chrono
function stop(){
    clearInterval(macloock);
}

// creat fonction restart chrono
function restart(){
    location.reload();
}
startBtn.addEventListener('click', start, false);
stopBtn.addEventListener('click', stop, false);
resetBtn.addEventListener('click', restart, false);
