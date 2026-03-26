function ordenarProductos(productos){
    const copia = [...productos];
    copia.sort((a, b) => 
        a.precio - b.precio);
    return copia;
}

module.exports = ordenarProductos;