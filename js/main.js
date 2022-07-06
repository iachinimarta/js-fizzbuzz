const boxContainerDom = document.querySelector("div.box-container");

for (let i = 1; i <= 100; i++) {

    let boxTesto = i;
    let boxClasse = '';

    if (i % 3 == 0) {
        boxTesto = 'Fizz';
        boxClasse = 'color-green';
    } else if (i % 5 == 0) {
        boxTesto = 'Buzz';
        boxClasse = 'color-yellow';
    }

    const div = `<div class="box ${boxClasse}">${boxTesto}</div>`;
    boxContainerDom.innerHTML += div;
}



