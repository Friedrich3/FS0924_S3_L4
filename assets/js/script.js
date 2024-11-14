const tombola = document.getElementById("tombola");
const btnEstrai = document.getElementById("extractButton");


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


/*
btnEstrai.addEventListener("click", function(){
    let numeroRandom = Math.floor(Math.random()* 90)+ 1;
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
*/




const testoEstratto = document.querySelector("#extract h4")

btnEstrai.addEventListener("click", function () {
    let numeroRandom = Math.floor(Math.random() * 90) + 1;
    
    if (numeriRandom.includes(numeroRandom) === true) {
        testoEstratto.innerText = `il numero ${numeroRandom} è gia stato estratto`;
    } else {
        numeriRandom.push(numeroRandom);
        const numeriEstratti = document.querySelectorAll("#tombola div");
        for (let i = 0; i < numeriEstratti.length; i++) {
            if (parseInt(numeriEstratti[i].innerText) === numeroRandom) {
                numeriEstratti[i].classList.add("estratto");
                testoEstratto.innerText = `Hai estratto il numero : ${numeroRandom}`;
            }

        }
    }



});
/*
// IL MATH. DEVE RESTITUIRE UN INDICE CHE INDICA UNO DEI NUMERI DENTRO i numeri random.
btnEstrai.addEventListener("click", estrazione);
function estrazione() {
    const testoEstratto = document.querySelector("#extract h4")
    let index = Math.floor(Math.random() * numeriRandom.length) + 1;  // riporta un numero random che verrà usato per idetificare l'indice dello stesso dentro all' array.
    let numeroSplice = numeriRandom.indexOf(index);
    //DEVO EVITARE CHE LO SPLICE CANCELLI IL -1
    if (numeroSplice < 0) {
        
    } else {
        numeriRandom.splice(numeroSplice, 1);
        const numeriEstratti = document.querySelectorAll("#tombola div");
        for (let i = 0; i < numeriEstratti.length; i++) {
            if (parseInt(numeriEstratti[i].innerText) === index) {
                numeriEstratti[i].classList.add("estratto");
                testoEstratto.innerText = `Hai estratto il numero : ${index}`;
            }
        }

        console.log("click");
    }
};*/

/*
btnEstrai.addEventListener("click", function () {
    let numeroRandom = Math.floor(Math.random() * 90) + 1;
    
    if (numeriRandom.includes(numeroRandom) === true) {
        testoEstratto.innerText = `il numero ${numeroRandom} è gia stato estratto`;
    } else {
        numeriRandom.push(numeroRandom);
        const numeriEstratti = document.querySelectorAll("#tombola div");
        for (let i = 0; i < numeriEstratti.length; i++) {
            if (parseInt(numeriEstratti[i].innerText) === numeroRandom) {
                numeriEstratti[i].classList.add("estratto");
                testoEstratto.innerText = `Hai estratto il numero : ${numeroRandom}`;
            }

        }
    }



});
*/