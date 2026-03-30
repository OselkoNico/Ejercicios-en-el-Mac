const ordenarProductos = require('../ejerci5');

test('Función de ordenar productos según su precio', () => {
    const original = [
        { nombre: "Teclado", precio: 30 },
        { nombre: "Ratón", precio: 15 },
        { nombre: "Monitor", precio: 200 }
    ];
    const copiaOriginal = [...original]

    ordenarProductos(original);

    expect(original).toEqual(copiaOriginal);
})