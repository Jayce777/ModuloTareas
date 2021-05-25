require('colors');

const {
   guardarInformacion, 
  leerInformacion 
} = require('./helpers/guardararchivo');
//const {mostrarmenu,pausa}=require('./helpers/mensajes');
const {
  menu,
  pausa,
  leerEntrada
} = require('./helpers/inquirer');
//const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

console.clear();

const main = async () => {

  let opt = '';
  const tareas = new Tareas();
  const infotareas =  leerInformacion();

  //var tareascargadas=[];
  if (infotareas) {
     tareas.cargarlistadoArreglo(infotareas);

  }
  //await pausa();
  do {
    opt = await menu();
    switch (opt) {
      case '1':
        const descripcion = await leerEntrada('Nueva tarea:'.green);
        tareas.crearTarea(descripcion);
        break;
      case '2':
        console.log(tareas.listadoTareas());
        break;
        case '3':
          console.log(tareas.listadoPendientesCompletadas(true));
          break;
          case '4':
            console.log(tareas.listadoPendientesCompletadas(false));
            break;

    }
    guardarInformacion(tareas.listadoArreglo);

    if (opt !== '0') await pausa();

  } while (opt !== '0');

};

main();