let fs = require('fs'),
    path = require('path');

module.exports = {
    "pathAbsolute": (dirname, paths) => path.join(dirname, paths),

    "getListAllUniqueAtributes": (lista=[], propiedad="") => {
        // if (!lista.hasOwnProperty(`${propiedad}`)) return undefined;
        /*console.log(`propiedad: ${propiedad}`)*/
       /* console.log(lista)*/
        if (!(lista[0][propiedad] != undefined)) return undefined;
    
        let myset = new Set();
    
        lista.forEach(obj => {
            let property = obj[propiedad].toString()
            /*console.log(`propiedad: ${property}`)*/
            myset.add(property);
        });
    
        /*console.log(myset.size)*/
        return Array.from(myset); //lista filtrada
    },

    "JsonToObject": (dirname, paths) => JSON.parse(fs.readFileSync(path.join(dirname, paths), 'utf-8')),
    // falta implementar
    "writeJson": (dirname, paths, data) => fs.writeFileSync(path.join(dirname, paths), JSON.stringify(data), 'utf-8' )
}