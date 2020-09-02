//Toma t0to lo que esta en crud y llamalo crud luego se accede con punto
import * as CRUD from './js/crud-provider';

CRUD.getUsuario(1).then(console.log);

CRUD.crearUsuario({

    usuario: 'Fernando',
    job: 'Programador'

}).then(console.log);

CRUD.actualizarUsuario(1, {
    name: 'Alex',
    job: 'Cogelon'
}).then(console.log);

CRUD.borrarUsuario(1).then(console.log)
