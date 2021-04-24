const fs=require('fs');

const archivo='./db/data.json';

const guardarInformacion=(data)=>{

    fs.writeFileSync(archivo,JSON.stringify(data));
};

const leerInformacion=()=>{

    if(!fs.existsSync(archivo)){
        return null;
    }

    const info=fs.readFileSync(archivo,{encoding:'utf-8'});
    const dataobject=JSON.parse(info);
    return dataobject;
};

module.exports={
    guardarInformacion,
    leerInformacion
}