const boxContainerDom = document.querySelector("div.box-container");



for (let i = 0; i <= 100; i++) {
    const div = `<div class="box">${i}</div>`;
    boxContainerDom.innerHTML += div;
}



