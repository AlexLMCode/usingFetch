import {obtenerUsuarios} from "./http-provider";

const body = document.body;
let counter = 1;
let $tBody;

const crearHtml = () => {

    const html = `
    <h1 class="mt-5"> Usuarios</h1>
    <hr>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild(div);

    $tBody = document.querySelector('tbody');
    // Crear una referencia al TBODY
    // ya que los TRs van dentro del tbody
}


// La función crearFilaUsuario debería de recibir un UNICO usuario
// con la siguiente estructura
// {
//     "id": 7,
//     "email": "michael.lawson@reqres.in",
//     "first_name": "Michael",
//     "last_name": "Lawson",
//     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
// }
const crearFilaUsuario = ({email, first_name,last_name, avatar}) => {

    const html = `
        <td scope="col"> <b>${counter++}.</b> </td>
        <td scope="col"> ${email} </td>
        <td scope="col"> ${first_name} ${last_name} </td>
        <td scope="col">
            <img class="img-thumbnail" src="${avatar}" alt="Imagen de una persona">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    // Añadir el table row (tr) dentro del TBody creado anteriormente
    $tBody.append(tr);
}


export const init = async () => {

    crearHtml();

    const users = await obtenerUsuarios();
    users.forEach(user => crearFilaUsuario(user))
    // Obtener la lista de usuarios usando el servicio creado
    // Por cada usuario, llamar la función crearFilaUsuario (for, forEach)
}

