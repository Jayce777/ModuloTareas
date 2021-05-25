const Tarea = require("./tarea");

class Tareas{
    listado={};

    get listadoArreglo(){
        const listaArr=[];
        Object.keys(this.listado).forEach(key=>{
            const tarea=this.listado[key];
            listaArr.push(tarea);
        });

        return listaArr;
    }
    constructor(){
        this.listado={};
    }

    cargarlistadoArreglo(tareas=[]){
       
        tareas.forEach(tarea=>{
            this.listado[tarea.id]=tarea;
        });
    }
    crearTarea(descripcion=''){
        const tarea=new Tarea(descripcion);
        this.listado[tarea.id]=tarea;
    }

    listadoTareas(){
        let enumerarLista='\n';
        let estado='';
      //console.log(this.listadoArreglo);

      this.listadoArreglo.forEach((e,i)=>{

        let idx=`${i+1}`.green;
        estado=(e.completadoEn!==null)
            ? 'Completada'.green
            :'Pendiente'.red;

            enumerarLista+=`${idx}. ${e.descripcion}::  ${estado}\n`;
      });
      
      return enumerarLista;
    }

    listadoPendientesCompletadas(completada=true){

        let enumerarLista='\n';
        let estado='';
      //console.log(this.listadoArreglo);
      let cont=0;
      this.listadoArreglo.forEach(e=>{

        estado=(e.completadoEn!==null)
            ? 'Completada'.green
            :'Pendiente'.red;

            if(completada){

                if(e.completadoEn){
                    cont+=1;
                    enumerarLista+=`${cont}. ${e.descripcion}::  ${estado}\n`;
                }
            }
            else{

                if(!e.completadoEn){
                    cont+=1;
                    enumerarLista+=`${cont}. ${e.descripcion}::  ${estado}\n`;
                }
            }

            
      });

      return enumerarLista;

    }
}

module.exports=Tareas;