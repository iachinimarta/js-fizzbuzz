const boxContainerDom = document.querySelector("div.box-container");

for (let i = 1; i <= 100; i++) {

    let boxTesto = i;
    let boxClasse = '';


    if ((i % 3 == 0) && (i % 5 == 0)) {
        boxTesto = 'FizzBuzz';
        boxClasse = 'color-red';
    } else if (i % 3 == 0) {
        boxTesto = 'Fizz';
        boxClasse = 'color-green';
    } else if (i % 5 == 0) {
        boxTesto = 'Buzz';
        boxClasse = 'color-yellow';
    }

    const div = `<div class="box ${boxClasse}">${boxTesto}</div>`;
    boxContainerDom.innerHTML += div;
}



// Mi conviene impostare una variabile ad es 'boxtesto' che contiene 'i' piuttosto che lavorare con 'i' direttamente.
// lasciando la variabile 'boxclasse' vuota posso poi modificarla a seconda della necessità che ho.
// Meglio definire prima tutte le variabili e le operazioni del caso e poi 'stampare'.

