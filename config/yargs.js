const opts = {

    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'descripcion de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marco como completado o pendiente la tarea'
    }

};


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opts)
    .command('actualizar', 'actualiza el estado completado de una tarea', opts)
    .command('borrar', 'Borra una tarea', opts)
    .help()
    .argv


module.exports = {
    argv
}