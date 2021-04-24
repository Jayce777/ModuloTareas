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


    crearTarea(descripcion=''){

        const tarea=new Tarea(descripcion);

        this.listado[tarea.id]=tarea;

    }

}

module.exports=Tareas;