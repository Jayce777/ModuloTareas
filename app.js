require('colors');

const {
   guardarInformacion, 
  leerInformacion 
} = require('./helpers/guardararchivo');
//const {mostrarmenu,pausa}=require('./helpers/mensajes');
const {
  menu,
  pausa,
  leerEntrada,
  listadotareasborrar,
  confirmar,
  mostrarlistadocheck
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

            case '5':
              
            const ids= await mostrarlistadocheck(tareas.listadoArreglo);
            console.log(ids);

            tareas.cambiarpendientescompletadas(ids);

            
              break;
            case '6':
            const id=await listadotareasborrar(tareas.listadoArreglo);

            if(id!=='0'){
              const confirmaropcion= await confirmar('Está seguro de borrar');
          
              if(confirmaropcion){
  
                tareas.borrartarea(id);
                console.log('Tarea borrada');
              }
            }
           
            break;

    }
    guardarInformacion(tareas.listadoArreglo);

    if (opt !== '0') await pausa();

  } while (opt !== '0');

};

main();