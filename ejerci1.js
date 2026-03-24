function crearSistemaReservas(capacidadMaxima){
    let reservas = [];
    function reservar(nombre, personas){
        if(personas <= 0) return
        if(reservas.some(r=>r.nombre === nombre)) return
        if(personas > disponibles()) return 

        reservas.push({nombre, personas})
        }
    function disponibles(){
        let personasTotales = 0;
        reservas.forEach(reserva => {
            personasTotales += reserva.personas
    });
        return (capacidadMaxima - personasTotales)
    }
    function cancelar(nombre){
        reservas = reservas.filter(r => r.nombre !== nombre)
    }
    return {
        reservar,
        disponibles,
        cancelar
    }
};

module.exports = crearSistemaReservas;