function obtenerUsuario(){
   return new Promise((resolve) => {
        setTimeout(() => {resolve({ nombre: "Ana" })}, 2000)
    })
};

module.exports = obtenerUsuario;