const tombola = document.getElementById("tombola");
const btnEstrai = document.getElementById("extractButton");

const numeriRandom = [];
const numeriEstratti = [];

for(let i = 0; i < 90; i++){
    const numeroTombola = document.createElement("div")
    numeroTombola.innerText = i + 1;
    tombola.appendChild(numeroTombola);
}

btnEstrai.addEventListener("click", function(){
    let numeroRandom = Math.floor(Math.random()* 90)+ 1;
    //SE il numero estratto e' gia presente all'interno dei numeri estratti allora niente. altrimenti Esegui il ciclo sotto
    numeriRandom.push(numeroRandom);
    const numeriEstratti = document.querySelectorAll("#tombola div");
    for(let i = 0; i< numeriEstratti.length; i++){
        if(parseInt(numeriEstratti[i].innerText) === numeroRandom){
            numeriEstratti[i].classList.add("estratto");
            const testoEstratto = document.querySelector("#extract h4");
            testoEstratto.innerText = `Hai estratto il numero : ${numeroRandom}`;
        }

    }




});