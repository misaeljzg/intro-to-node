const fs = require('fs');

const crearArchivo = async (base = 5, list, hasta) => {

    try {
        console.log("==================");
        console.log('Tabla del', base);
        console.log("==================");
        let salida = '';
        const table = (operand, operand2) => operand * operand2;
        for (let i = 1; base * i <= hasta; i++) {
            salida += `${base} * ${i} = ${table(base, i)}\n`
        }
        if(list)
            console.log(salida);

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        console.log(`Todo ok, tabla ${base} creada`);

        return `Tabla ${base}`;
    } catch (error) {
        throw error;
    }


}

module.exports = {
    crearArchivo
}