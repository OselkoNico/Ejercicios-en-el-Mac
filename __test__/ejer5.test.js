const obtenerUsuario =  require('../ejer5');

test('Función de obtener usuarios: Ana',async () => {
    const resultado = await obtenerUsuario();
    expect(resultado.nombre).toEqual("Ana")
});