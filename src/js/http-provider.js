const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';


//Cloudinary
const cloudPreset = 'eauugbkg';
const cloudUrl = 'https://api.cloudinary.com/v1_1/do4cczndo/upload';


const obtenerChiste = async () => {

    try {

        const res = await fetch(jokeUrl)

        if (!res.ok) throw 'Error en la peticion';

        const {icon_url, id, value} = await res.json();

        return {icon_url, id, value};

    } catch (err) {
        throw err;
    }

};

const obtenerUsuarios = async () => {

    const res = await fetch(urlUsuarios);
    const {data: usuarios} = await res.json();

    return usuarios;
}

//archivo:file
const subirImagen = async (archivo) => {

    //crear un formulario de html en js
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivo);

    try {

        const res = await fetch(cloudUrl, {
            method: 'POST',
            body: formData,
        });

        if (res.ok) {
            const cloudRes = await res.json();
            console.log(cloudRes);
            return cloudRes.secure_url;

        } else {
            throw await res.json();
        }

    } catch (err) {
        throw err
    }

}

export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}