import {subirImagen} from "./http-provider";

const body = document.body;
let inputFile, imgFoto;

const crearInputFileHtml = () => {

    const html = `
        
        <h1>Subir archivos</h1>
        <hr>
        
        <label >Selecciona una Foto</label>
        <input type="file" accept="image/png, image/jpg"/>
        
        <br>
        
        <img src="" alt="imagen" id="foto" class="img img-thumbnail">
    
    `;

    const div = document.createElement('duv');
    div.innerHTML = html;

    body.append(div);

    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto');
}

const eventos = () => {

    inputFile.addEventListener('change', (event) => {

        const file = event.target.files[0];

        subirImagen(file).then(url => imgFoto.src = url)

    })

}

export const init = () => {
    crearInputFileHtml();
    eventos();
}