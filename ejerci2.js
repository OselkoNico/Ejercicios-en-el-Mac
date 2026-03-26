function filtrarAdultos(usuarios){
    let mayorEdad = [];
    for(let usuario of usuarios){
        if(usuario.edad >= 18){
            mayorEdad.push(usuario)
        }
    }
    return mayorEdad
};

module.exports = filtrarAdultos;