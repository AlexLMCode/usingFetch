import {obtenerChiste} from "./http-provider";

const $body = document.body;
let $btnChiste, $listCointainer;
let counter = 1;

const crearChisteHtml = () => {

    const html = `
        <h1 class="mt-5">Chistes</h1>
        <hr>
        <button class="btn btn-primary">Otro chiste</button>
        <ol class="mt-2 list-group"></ol>
    `;

    const divChistes = document.createElement('div');

    divChistes.innerHTML = html;

    $body.append(divChistes);
}

const eventos = () => {
    $btnChiste = document.querySelector('button');
    $listCointainer = document.querySelector('ol');

    $btnChiste.addEventListener('click', async () => {

        $btnChiste.disabled = true
        dibujarChiste(await obtenerChiste());
        $btnChiste.disabled = false;

    })
}

//chiste (id, value)
const dibujarChiste = (chiste) => {

    const olItem = document.createElement('li');
    olItem.innerHTML = `<span>${counter++}</span> <img src="${chiste.icon_url}" alt="image"> ${chiste.value}`
    olItem.classList.add('list-group-item')

    $listCointainer.append(olItem);
}

export const init = () => {
    crearChisteHtml();
    eventos();
}