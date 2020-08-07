var pays = document.getElementById('pays');
let httpRequest = new XMLHttpRequest();
httpRequest.open("GET", "https://api.covid19api.com/countries", true);
httpRequest.onreadystatechange = function(){
    if(httpRequest.readyState === 4 && httpRequest.status === 200){
        let r = JSON.parse(httpRequest.response)
        let c = r.map(e=> e.Country);
        for(let i = 0; i<c.length; i++)
        {
            let Div = document.createElement("div");
            Div.innerHTML = c[i];
            Div.setAttribute('id', 'contries');
            Div.addEventListener('click', divClicked)
            pays.appendChild(Div)
            
        }
    }
}
httpRequest.send();

function  divClicked(e){
    var tar = e.target.innerHTML;
    
    var ctx = document.getElementById('myChart').getContext('2d');
    if(window.bar!=undefined)
        window.bar.destroy();
    let H = new XMLHttpRequest();
    var Country = tar;
    var CONF = [];
    var DATE = [];
    var ACT = [];
    var DEA = [];
    var REC = [];
    H.open("GET", "https://api.covid19api.com/dayone/country/"+Country, true);
    H.onreadystatechange = function(){
        if(H.readyState === 4 && H.status === 200){
            let r = JSON.parse(H.response)
            
            
            for(let i = 0; i < r.length; i++){
                DATE.push(r[i].Date.slice(2, 10));
                CONF.push(r[i].Confirmed);
                ACT.push(r[i].Active);
                DEA.push(r[i].Deaths);
                REC.push(r[i].Recovered);
                
            }
            
                    
            window.bar  = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: DATE,
                    datasets: [{
                        label: 'Confirmes',
                        data: CONF,
                        borderColor: ['blue'],
                        backgroundColor: ['rgba(0, 94, 194, 0.36)'],
                        borderWidth: 2
                    },
                    {   
                        label: 'Geris',
                        data: REC,
                        borderColor: ['green'],
                        backgroundColor: ["rgba(101, 233, 78, 0.32)"],
                        borderWidth: 2
                        
                    },
                    {
                        label: 'Déces',
                        data: DEA,
                        borderColor: ['red'],
                        backgroundColor: ["rgba(194, 0, 0, 0.32)"],
                        borderWidth: 2
                    },
                    {
                        label: 'Active',
                        data: ACT, 
                        borderColor: ['yellow'],
                        backgroundColor: ["rgba(240, 236, 0, 0.55)"],
                        borderWidth: 2
                    }
                ]
                },
                options: {
                    title:{
                        display:true,
                        text: tar,
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }
    }
    H.send();

}

