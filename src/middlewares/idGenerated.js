const data = {
    /* esta propiedad tendra asignada una array de objetos */
    "data": undefined,
    
    /* ejecutar despues de realizar el import para setear la propiedad data */
    "useData": data => this.data = data,

    "newId": () => {
        /* lanzar error si la propiedad data aun no esta definida */
        if( this.data == undefined) throw "Error data empty";
        let aux = 0;

        /* si DATA existe pero esta vacia devuelve ID=1 */
        if(!this.data.length>0) return   1;
    
        /* recorre todos los registros buscando el id mas alto */
        this.data.forEach(registro => {
            aux = registro.id>aux? registro.id : aux;
        })

        return aux+1;
        /* 
        
        this.data = [...this.data, newID] ;
        return newID; */
    }
}   

module.exports = data;