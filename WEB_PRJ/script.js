
const T=["La Data Science est un mélange disciplinaire entre la data inférence, le développement d’algorithme et la technologie, ",
"la science des données. C’est la discipline qui permet à une entreprise d’explorer et d’analyser les données brutes pour les transformer en informations précieuses permettant de résoudre les problèmes de l’entreprise. ",
"Data science is the field of study that combines domain expertise, programming skills, and knowledge of mathematics and statistics to extract meaningful insights from datat",
"Data science provides meaningful information based on large amounts of complex data or big data",
"Data science, combines different fields of work in statistics and computation to interpret data for decision-making purposes.",
"The data science field employs mathematics, statistics and computer science disciplines, and incorporates techniques like machine learning, cluster analysis, data mining and visualization.",
"La data science est une science interdisciplinaire s’appuyant sur des méthodes scientifiques, des algorithmes, des processus et autres systèmes afin d’exploiter de grands ensembles de données",
"La data science fait appel aux mathématiques, aux statistiques et à l'informatique et intègre des techniques telles que l'apprentissage statistique, l'analyse topologique, l'exploration des données et leur visualisation.",
"Data science is an inter-disciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from many structural and unstructured data.",
"The data science field employs mathematics, statistics and computer science disciplines, and incorporates techniques like machine learning, cluster analysis, data mining and visualization."
]

var rand = Math.floor(Math.random() * 10)
const controleur = document.querySelector('.control');
const msg = document.querySelector('#msg');
const test = document.querySelector('#in');
const chrono = document.querySelector('.time');
let TPS = [0,0,0,0];
let clock;
let run = false;
var text = T[rand];

function textrun(){
    document.querySelector('.random_text').innerHTML = text;
    return text;
}
textrun();
var textes = textrun();


function zero(time){
    if (time <= 9){
        time = "0" + time;
    }
    return time;
}

function runTimer(){
    let  newTime = zero(TPS[0]) + ":" + zero(TPS[1]) + ":" + zero(TPS[2]);
    chrono.innerHTML = newTime;
    TPS[3]++;
    TPS[0] = Math.floor((TPS[3]/100)/60);
    TPS[1] = Math.floor((TPS[3]/100) - (TPS[0] * 60));
    TPS[2] = Math.floor(TPS[3] - (TPS[1]*100) - (TPS[0] * 6000));
}


function Refaire(){
    clearInterval(clock);
    location.reload();
    msg.value = "";
    clearInterval(clock);
}

function textControler(){
    let  typingTXT = msg.value;
    let realText = textes.substring(0, typingTXT.length);
    if(typingTXT == textes){
        controleur.style.borderColor = 'green';
        clearInterval(clock);
        chrono.style.color = 'orangered';
    }else{
        if(typingTXT == realText){
            controleur.style.borderColor = 'green';
        }else{
            controleur.style.borderColor = 'orangered';
        }
    }
}


function Play(){
    let L = msg.value.length;
    if(L === 0){
        run = true;
        clock = setInterval(runTimer, 10);
    }
}
msg.addEventListener('keypress', Play, false);
msg.addEventListener('keyup', textControler, false);
test.addEventListener('click', Refaire, false);