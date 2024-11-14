const tombola = document.getElementById("tombola");
const btnEstrai = document.getElementById("extractButton");
const testoEstratto = document.querySelector("#extract h4")


const numeriRandom = [];
const numeriEstratti = [];

for (let i = 0; i < 90; i++) {
    const numeroTombola = document.createElement("div")
    numeroTombola.innerText = i + 1;
    tombola.appendChild(numeroTombola);
    /*popola array random con 90 numeri
    let numero = i + 1;
    numeriRandom.push(numero);
*/
}


/**/
btnEstrai.addEventListener("click", function () {
    estrazione();
});





function estrazione() {
    let numeroEstratto = Math.floor(Math.random() * 90) + 1;
    if(numeriEstratti.length === 90){
        alert("hai estratto tutti i numeri");
    
    } else if(numeriEstratti.includes(numeroEstratto)){
        estrazione();
    }else{
        numeriEstratti.push(numeroEstratto);
        markEstratto(numeroEstratto);
    }
};

function markEstratto(numEstratto){
    const divEstratti = document.querySelectorAll("#tombola div");
    for (let i = 0; i < divEstratti.length; i++) {
        if(divEstratti[i].innerText == numEstratto){
            divEstratti[i].classList.add("estratto");
        }
    }}
