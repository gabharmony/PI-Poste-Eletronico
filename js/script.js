var zoom = 100
const zoomMais = document.querySelector(".zoom-button-aum");
const zoomMenos = document.querySelector(".zoom-button-dim");
const contrastebtn = document.querySelector(".contraste-button")

zoomMais.addEventListener("click", () => {
    zoom = zoom + 10;
    let zoomPorcet = String(zoom + "%");
    console.log(zoomPorcet);
    document.body.style.zoom = zoomPorcet;
});

zoomMenos.addEventListener("click", () => {
    zoom = zoom - 10;
    let zoomPorcet = String(zoom + "%");
    console.log(zoomPorcet);
    document.body.style.zoom = zoomPorcet;
});

contrastebtn.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
});


