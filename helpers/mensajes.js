require('colors');


const mostrarmenu=()=>{


    return new Promise((resolve)=>{
        console.clear();

        console.log('Seleccione una opción\n'.blue);
    
        console.log(`${'1.'.green} crear tarea`);
        console.log(`${'2.'.green} listas tareas`);
        console.log(`${'3.'.green} listas tareas completadas`);
        console.log(`${'4.'.green} listas tareas pendientes`);
        console.log(`${'5.'.green} completar tarea(s)`);
        console.log(`${'6.'.green} borrar tarea`);
        console.log(`${'0.'.green} salir\n`);
    
        const readline=require('readline').createInterface({
                input:process.stdin,
                output:process.stdout
    
        });
        readline.question('Seleccione una opción:',(opt)=>{
            readline.close();

            resolve(opt);
        });


    });
    

};

const pausa=()=>{

    return new Promise((resolve)=>{
        const readline=require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
    
           
    
    });
    readline.question(`Presione ${'ENTER'.blue} para continuar: `,(opt)=>{
        readline.close();
        resolve(opt);
    });
    
    

    });
    
};

module.exports={

    mostrarmenu,
    pausa
};