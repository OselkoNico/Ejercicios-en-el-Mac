const filtrarAdultos = require('./ejerci2');

test('Función para filtrar mayores de edad', ()=>{
    const usuarios = [
        { nombre: "Juan", edad: 17 },
        { nombre: "Ana", edad: 42 }
    ];
    const resultado = (filtrarAdultos(usuarios));
    expect(resultado).toEqual([{ nombre: "Ana", edad: 42 }])
});