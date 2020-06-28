const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un #`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

let listarTabla = (base, limite) => {

    console.log('============================'.green);
    console.log(`=====tabla de ${base}=======`.red);
    console.log('============================'.green);

    if (!Number(base)) {
        reject(`El valor introducido ${base} no es un #`);
        return;
    }
    if (!Number(limite)) {
        reject(`El valor introducido ${limite} no es un #`);
        return;
    }

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
    return true;
}

module.exports = {
    crearArchivo,
    listarTabla
}