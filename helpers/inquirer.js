const inquirer= require('inquirer');
require('colors');


const opcionpausa=[
{
    type:'input',
    name:'presiona',
    message:`Presione ${'ENTER'.blue} para continuar`,
    
}
  
    
];

const listadopreguntas=[

    {
        type:'list',
        name:'opcion',
        message:'Elije una opción',
        choices:[
            {
                value:'1',
                name: `${'1)'.blue} crear tarea`
            },
            {
                value:'2',
                name:`${'2)'.blue} listar tareas` 
            },
             {
                value:'3',
                name:`${'3)'.blue} listar tareas completadas` 
            },
             {
                value:'4',
                name:`${'4)'.blue} listar tareas pendientes` 
            },
             {
                value:'5',
                name:`${'5)'.blue} completar tarea(s)` 

            },
             {
                value:'6',
                name:`${'6)'.blue} borrar tarea` 

            },

            {
                value:'0',
                name:`${'0)'.blue} salir` 
            }
            
        ]

    }

];


const pausa=async()=>{

    console.log('\n');
    const {presiona}=await inquirer.prompt(opcionpausa);

    return presiona;

};

const menu=async()=>{

    console.clear();

    console.log('================================='.blue);
    console.log('        Módulo Tareas           '.green);
    console.log('=================================\n'.blue);

   const {opcion}= await inquirer.prompt(listadopreguntas);

   return opcion;
};


const leerEntrada=async(message)=>{

    const pregunta=[
        {
            type:'input',
            name:'entrada',
            message,
            validate(value){
                if(value.length===0){
                    return 'Debe ingresar un valor';
                }else{
                    return true;
                }
            }
        }
    ];

   const{entrada}=await inquirer.prompt(pregunta);
   return entrada;

};


const listadotareasborrar=async(tareas=[])=>{
   
       // map retorna un nuevo arreglo
    const choices=tareas.map((tarea,i)=>{

            const index=`${i+1}.`.blue;
        return {
            value:tarea.id,
            name:`${index} ${tarea.descripcion}`  

        }

    });

    choices.unshift({

        value:'0',
        name:`${0}.`.blue+ ' Salir',
       
    });

    const preguntas=[
            {
                type:'list',
                name:'id',
                message:'borrar',
                choices
            }

    ]
    const {id}= await inquirer.prompt(preguntas);

    
        return id;
};


const confirmar=async(message)=>{

    const pregunta=[
        {
            type:'confirm',
            name:'ok',
            message
        }

    ];
    const {ok}= await inquirer.prompt(pregunta);

    return ok;
};


const mostrarlistadocheck=async(tareas=[])=>{
   
    // map retorna un nuevo arreglo
 const choices=tareas.map((tarea,i)=>{

         const index=`${i+1}.`.blue;
     return {
         value:tarea.id,
         name:`${index} ${tarea.descripcion}`  ,
         checked:(tarea.completadoEn)?true:false

     }

 });



 const preguntas=[
         {
             type:'checkbox',
             name:'ids',
             message:'seleccione',
             choices
         }

 ]
 const {ids}= await inquirer.prompt(preguntas);

 
     return ids;
};


module.exports={
    menu,
    pausa,
    leerEntrada,
    listadotareasborrar,
    confirmar,
    mostrarlistadocheck
};