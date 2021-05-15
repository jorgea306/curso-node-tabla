const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar, hasta ) => {   
    
    try {
        
        
        
        let salida = '';
        
        for (let i = 0; i < hasta; i++) {
            salida += `${base} * ${i} = ${base * i}\n`;  
        }
        
        if(listar){
            console.log('================='.green);
            console.log(`Tabla del: ${base}`);
            console.log('================='.green);
            console.log(salida.red);
        }
        
        fs.writeFileSync ( `./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`;
        
    } catch (error) {

        throw error;
    }

}

module.exports = {
    crearArchivo
}